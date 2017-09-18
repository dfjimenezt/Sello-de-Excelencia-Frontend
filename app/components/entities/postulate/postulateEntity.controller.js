class postulateEntityController {
  constructor(Api, $http, $auth, $state) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.$auth = $auth
    this.$state = $state
    this.user = $auth.getPayload()
    this.categoriesEndpoint = Api + '/service/category'
    this.serviceEndpoint = Api + '/service/service'
    this.serviceStatusEndpoint = Api + '/service/service_status?order=timestamp%20desc&filter_field=id_service&filter_value='
    this.questionEndpoint = Api + '/question/question?limit=50&filter_field=topic.id_category&filter_value='
    this.answerEndpoint = Api + '/question/user_answer'
    this.loading = false
  }
  $onInit() {
    this.$http.get(this.categoriesEndpoint).then((results) => {
      this.categories = results.data.data
    })
    this.entity = this.user.institutions[0]
    this.clearService()
  }
  selectService() {
    this.loading = true
    this.questions = [] 
    this.answers = []
    this.$http.get(this.serviceStatusEndpoint + this.service.id).then((results) => {
      this.service.level = results.data.data[0].level
      this.getQuestions()
    })
  }
  deleteService(){
    this.loading = true
    this.$http.delete(this.serviceEndpoint+ '?id=' + this.service.id).then(() => {
      this.clearService()
    })
  }
  clearService(){
    this.service = null
    this.questions = [] 
    this.answers = []
    this.$http.get(this.serviceEndpoint +
      '?filter_field=id_institution&filter_value=' + this.entity.id +
      '&filter_field=current_status&filter_value=10').then((results) => {
        this.pendingServices = results.data.data
        this.loading = false
      })
  }
  activity(){
    this.$state.go('entity.activity')
  }
  getQuestions() {
    let url = this.questionEndpoint + this.service.id_category
    for(let i = 1 ; i<=this.service.level;i++){
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
        question.service = this.service.id
        if(ids[question.id] !== undefined){
          question.answer = this.answers[ids[question.id]].id
          question.comment = this.answers[ids[question.id]].comment
          question.media = this.answers[ids[question.id]].media
          if(question.media.url){
            question.media.name = question.media.url.substr(
              question.media.url.lastIndexOf('/')+1)
            question.canDelete = true
          }
          question.updatable = true
        }
        if(this.postulationFinished()){
          this.canPostulate = true
        }
      })
      this.loading = false
    })
  }
  postulationFinished(){
    let pending = false
    this.questions.forEach((question)=>{
      if(!question.answer){
        pending = true
      }
    })
    return !pending
  }
  createService() {
    this.loading = true
    this.service.id_institution = this.entity.id
    this.$http.post(this.serviceEndpoint, this.service).then((results) => {
      this.service.id = results.data.id
      this.getQuestions()
    })
  }
  finishPostulation(){
    this.$http.put(this.serviceEndpoint,this.service).then(()=>{
      this.service.current_status = 1 //Verification
      $('#modal-laucher').click()
      this.canPostulate = false
    })
  }
  
  createAnswer() {
    if(this.postulationFinished()){
      this.canPostulate = true
    }
  }
}

export default postulateEntityController