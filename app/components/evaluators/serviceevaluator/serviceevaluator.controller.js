class serviceEvaluator{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.serviceEndpoint = Api + '/service/service?simple=false&'
    this.questionEndpoint = Api + '/question/question'
    this.answerEndpoint = Api + '/question/user_answer'
    this.requestEndpoint = Api +'/question/evaluation_request'
    this.selected = null
    this.currentIndex = 0
  }
  $onInit(){
    this.question = this.request.question
    this.question.disabled = true
    this.question.evaluable = true
    if(this.request.id_request_status === 6){
      this.question.rejectable = true
    }
    this.answer = this.request.user_answer
    this.service = this.request.service
    this.question.comment = this.answer.comment
    this.getAnswer()
  }
  getAnswer(){
    this.$http.get(this.answerEndpoint+'?id='+this.answer.id).then((result)=>{
      this.question.media = result.data.data[0].media
      if(this.question.media.url){
        this.question.media.name = this.question.media.url.substr(this.question.media.url.lastIndexOf('/')+1)
      }
    })
  }
  requestInformation(){
    let rq = {
      id:this.request.id,
      id_request_status:6 //feedback
    }
    this.$http.put(this.requestEndpoint,rq).then(()=>{
      this.request.id_request_status = 6
      this.question.rejectable = true
    })
  }
}

export default serviceEvaluator