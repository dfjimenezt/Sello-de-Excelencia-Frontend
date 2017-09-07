class EvaluationController {
  constructor($state, $auth, $http, Api) {
    'ngInject'
    this.$state = $state
    this.$auth = $auth
    this.finished = false
    this.$http = $http
    this.questionsEndpoint = Api+'/question/category_questions?filter_field=id_category&filter_value='
    this.qualifyEndpoint = Api+'/service/service_comment'
  }
  $onInit() {
    this.user = this.$auth.getPayload()
    this.comment = ''
  }
  $onChanges(changes){
    if(changes.service && changes.service.currentValue){
      this.getQuestions()
    }
  }
  getQuestions(){
    this.$http.get(this.questionsEndpoint+this.service.id_category).then((results)=>{
      this.questions = results.data.data
    })
  }
  isAuthenticated() {
    return this.$auth.isAuthenticated()
  }
  qualify(){
    let error = false
    let _rate = 0
    this.questions.forEach((q)=>{
      if(isNaN(q.rate)){
        error = true
        q.error = true
      }else{
        q.error = false
        _rate += q.rate
      }
    })
    if(error){
      return
    }
    _rate = _rate / this.questions.length
    let data = {
      id_service:this.service.id,
      rate: _rate,
      text: this.comment
    }

    this.$http.post(this.qualifyEndpoint,data).then(()=>{
      this.finished = true
    })
  }

  close(){
    $('.modal-close').click()
  }

}

export default EvaluationController