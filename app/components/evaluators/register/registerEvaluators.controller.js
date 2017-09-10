class RegisterEvaluatorController {
  constructor(toastr,$http,Api,$auth,$state) {
    'ngInject'
    this.toastr = toastr
    this.$http = $http
    this.Api = Api
    this.$auth = $auth
    this.$state = $state
    this.categoriesEndpoint = Api + '/service/category'
    this.questionTopicsEndpoint = Api + '/question/questiontopic'
    this.countriesEndpoint = Api + '/place/country?limit=300'
    this.regionsEndpoint = Api + '/place/region?limit=300&filter_field=id_country&filter_value='
    this.citiesEndpoint = Api + '/place/city?limit=300&filter_field=id_region&filter_value='
    this.docTypeEndpoint = Api + '/configuration/type_document?limit=300'
    this.availabilitiesEndpoint = Api + '/configuration/availability?limit=300'
    this.userEndpoint = Api + '/configuration/user'
    this.registerEndpoint = Api + '/auth/register_evaluator'
    this.getCategories()
    this.getCountries()
    this.getDocTypes()
    this.getAvailabilities()
    this.section = 1
    this.openConfirmation = false
  }

  getAvailabilities(){
    this.$http.get(this.availabilitiesEndpoint).then((result) => {
      this.availabilities = result.data.data
    })
  }
  getDocTypes(){
    this.$http.get(this.docTypeEndpoint).then((result) => {
      this.document_types = result.data.data
    })
  }
  getCountries() {
    this.$http.get(this.countriesEndpoint).then((result) => {
      this.countries = result.data.data
    })
  }
  getRegions() {
    this.$http.get(this.regionsEndpoint+this.register.id_country).then((result) => {
      this.regions = result.data.data
    })
  }
  getCities() {
    this.$http.get(this.citiesEndpoint+this.register.id_region).then((result) => {
      this.cities = result.data.data
    })
  }
  getCategories() {
    this.$http.get(this.categoriesEndpoint).then((result) => {
      this.categories = result.data.data
    })
  }
  getTopics() {
    let filters = []
    for (let i = 0; i < this.register.categories.length; i++) {
      filters.push('filter_field=id_category&filter_value=' + this.register.categories[i].id)
    }
    if(filters.length === 0){
      this.topics = []
      return
    }
    let url = this.questionTopicsEndpoint + '?limit=200&' + filters.join('&')
    this.$http.get(url)
      .then((results) => {
        this.topics = results.data.data
      })
  }
  hasCategory(category){
    let i = -1
    this.register.categories.forEach((item,idx)=>{
      if(item.id === category.id)
        i = idx
    })
    return i
  }
  hasTopic(topic){
    let i = -1
    this.register.topics.forEach((item,idx)=>{
      if(item.id === topic.id)
        i = idx
    })
    return i
  }
  toggleCategory(category) {
    var idx = this.hasCategory(category)
    if (idx > -1) {
      this.register.categories.splice(idx, 1)
    }
    else {
      this.register.categories.push(category)
    }
    this.getTopics()
  }
  toggleTopic(topic){
    var idx = this.hasTopic(topic)
    if (idx > -1) {
      this.register.topics.splice(idx, 1)
    }
    else {
      this.register.topics.push(topic)
    }
  }
  $onInit() {
    this.register = {}
  }
  sendRegister(){
    this.$http.post(this.registerEndpoint,this.register).then((result)=>{
      this.openConfirmation = true
      this.$auth.setToken(result.data.token)
      this.register = this.$auth.getPayload()
      this.section = 2
    })
  }
  update(){
    this.$http.put(this.userEndpoint,this.register).then((result)=>{
      this.$auth.setToken(result.data.token)
      this.toastr.success('Datos enviados exitosamente.','Registrar Evaluador')
      this.$state.go('evaluator')
    })
  }
}

export default RegisterEvaluatorController
