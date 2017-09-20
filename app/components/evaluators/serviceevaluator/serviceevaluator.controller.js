/*global grecaptcha*/
class serviceEvaluator{
  constructor(Api,$http,$stateParams,$state){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.$state = $state
    this.serviceEndpoint = Api + '/service/service'
    this.questionEndpoint = Api + '/question/question'
    this.answerEndpoint = Api + '/question/user_answer'
    this.requestEndpoint = Api +'/question/evaluation_request'
    this.selected = null
    this.currentIndex = 0
    this.openReject = false
    this.openApprove = false
    this.request= $stateParams.requisite
  }
  $onInit(){
    if(!this.request){
      this.onFinished()
      return
    }
    this.question = this.request.question
    this.question.disabled = true
    this.question.evaluable = false
    if(this.request.id_request_status === 3){
      this.question.acceptable = true
    }
    if(this.request.id_request_status === 2 || this.request.id_request_status == 4){
      this.question.evaluable = true
    }
    if(this.request.id_request_status === 6){
      this.question.evaluable = true
      this.question.rejectable = true
    }
    if(this.request.id_request_status === 7){
      this.question.accepted = true
    }
    if(this.request.id_request_status === 8){
      this.question.rejected = true
    }
    this.answer = this.request.user_answer
    this.service = this.request.service
    this.question.comment = this.answer.comment
    this.getAnswer()
    this.getService()
  }
  getService(){
    this.$http.get(this.serviceEndpoint+'?id='+this.service.id).then((result)=>{
      this.service = result.data.data[0]
    })
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
  reject(){
    this.openReject = true
    grecaptcha.reset()
  }
  onFinished(){
    this.$state.go('evaluator.activity.proccess')
  }
  rejected(){
    if(grecaptcha.getResponse()===''){
      this.robotError = true
    }else{
      this.robotError = false
      this.openReject = false
      let rq = {
        id:this.request.id,
        id_request_status:8 //rejected
      }
      this.$http.put(this.requestEndpoint,rq).then(()=>{
        this.request.id_request_status = 8
        this.question.rejectable = false
        this.onFinished()
      })
      
    }
  }
  evaluatorAccepted(){
    let rq = {
      id:this.request.id,
      id_request_status:4 //rejected
    }
    this.$http.put(this.requestEndpoint,rq).then(()=>{
      this.request.id_request_status = 4
      this.question.rejectable = false
      this.onFinished()
    })
  }
  evaluatorRejected(){
    let rq = {
      id:this.request.id,
      id_request_status:5 //rejected
    }
    this.$http.put(this.requestEndpoint,rq).then(()=>{
      this.request.id_request_status = 5
      this.question.rejectable = false
      this.onFinished()
    })
  }
  approve(){
    this.openApprove = true
  }
  approved(){
    let rq = {
      id:this.request.id,
      id_request_status:7 //approved
    }
    this.openApprove = false
    this.$http.put(this.requestEndpoint,rq).then(()=>{
      this.request.id_request_status = 7
      this.question.rejectable = false
      this.onFinished()
    })
  }
}

export default serviceEvaluator