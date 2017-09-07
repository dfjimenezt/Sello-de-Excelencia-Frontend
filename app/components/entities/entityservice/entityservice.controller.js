class entityService{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.serviceEndpoint = Api + '/service/service?simple=false'
    this.questionEndpoint = Api + '/question/question?limit=50&filter_field=topic.id_category&filter_value='
    this.answerEndpoint = Api + '/question/user_answer'
    this.selected = null
    this.currentIndex = 0
  }
  $onInit(){
    if(this.service.current_status === '6'){
      //this.$http.get(//user_comments).then((results){})
    }
    this.getQuestions()
  }
  getQuestions() {
    let url = this.questionEndpoint + this.service.id_category
    for(let i = 1 ; i<=this.service.status.level;i++){
      url +='&filter_field=level&filter_value=' + i
    }

    this.$http.get(url).then((results) => {
      this.questions = results.data.data
    }).then(()=>{
      let url = this.answerEndpoint +
      '?limit=200&filter_field=id_service&filter_value='+this.service.id
      return this.$http.get(url)
    }).then((response)=>{
      this.answers = response.data.data
      let ids = {}
      this.answers.forEach((answer,i)=>{
        ids[answer.id_question] = i
      })
      this.questions.forEach((question)=>{
        question.disabled = false
        if(ids[question.id] !== undefined){
          question.comment = this.answers[ids[question.id]].comment
          question.media = this.answers[ids[question.id]].media
          question.status = this.answers[ids[question.id]].status
          if(question.media.url){
            question.media.name = question.media.url.substr(question.media.url.lastIndexOf('/')+1)
          }
          question.disabled = true
          
        }
      })
      this.selected = this.questions[this.currentIndex]
    })
  }
  nextQuestion(){
    if(this.currentIndex < this.questions.length -2)
      this.selected = this.questions[++this.currentIndex]
  }
  prevQuestion(){
    if(this.currentIndex > 0)
      this.selected = this.questions[--this.currentIndex]
  }
}

export default entityService