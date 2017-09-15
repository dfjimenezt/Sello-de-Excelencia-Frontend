class activityEvaluatorController {
  constructor(Api, $http,$auth) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.$auth = $auth
    this.pagestoshow = 5
    this.pager = {
      total_pages:0
    }
    this.activityquery = {
      limit: 20,
      page: 1,
      fields:{
        id_user:[$auth.getPayload().id]
      },
      order:'timestamp desc,id_request_status desc'
    }
    this.postulatequery = {
      limit: 20,
      page: 1,
      fields:{
        level:null,
        'category.id':null
      },
      order:'timestamp asc'
    }
    this.requestEndpoint = Api +'/question/evaluation_request?activity=true'

    this.answersEndpoint = Api + '/question/user_answer?postulate=true'
    this.institutionEndpoint = Api +'/place/institution'
    this.serviceEndpoint = Api +'/service/service'
    this.categoriesEndpoint = Api + '/service/category'
    
    this.questionTopicsEndpoint = Api + '/question/questiontopic'

    this.openConfirmation = false
    
    this.getCategories()
    this.getTopics()
  }
  $onInit() {
    this.setSection('asignated')
    
  }
  selectedInstitution(item){
    this.section == 'postulate'?
    this.postulatequery.fields['institution.id'] = item.id :
    this.activityquery.fields['service.id_institution'] = item.id 
    this.getData()
  }
  selectedService(item){
    this.query.fields['service.id'] = item.id 
    this.getData()
  }
  getCategories() {
    this.$http.get(this.categoriesEndpoint).then((result) => {
      this.categories = result.data.data
    })
  }
  getTopics() {
    this.$http.get(this.questionTopicsEndpoint).then((result) => {
      this.topics = result.data.data
    })
  }
  reset(){
    this.requisite = null
    this.getData()
  }
  setSection(section) {
    this.section = section
    if(this.section === 'asignated'){
      this.query = this.activityquery
      this.query.fields.id_request_status = [1]
    }
    if(this.section === 'proccess'){
      this.query = this.activityquery
      this.query.fields.id_request_status = [3,2,6]
    }
    if(this.section === 'finished'){
      this.query = this.activityquery
      this.query.fields.id_request_status = [7,5]
    }
    if(this.section === 'postulate'){
      this.query = this.postulatequery
    }
    this.reset()
  }
  getData() {
    if(this.$auth.getPayload().topics.length === 0){
      this.noTopics = true
      if(this.section === 'postulate'){
        return
      }
    }
    this.list = []
    this.loading = true
    this.noRequisites = false
    this.emptyTopics = false
    var url = this.section === 'postulate' ?this.answersEndpoint:this.requestEndpoint
    if (!url) {
      return
    }
    var params = ['page=' + this.query.page, 'limit=' + this.query.limit]
    if (this.query.filter) {
      params.push('filter=' + this.query.filter)
    }
    if (this.query.fields) {
      for (var field in this.query.fields) {
        var values = this.query.fields[field]
        if(values){
          if(values.forEach){
            values.forEach(function (value) {
              params.push('filter_field=' + field + '&filter_value=' + value)
            })
          }else{
            if(this.section === 'postulate'){
              params.push(field + '=' + values)
            }else{
              params.push('filter_field=' + field + '&filter_value=' + values)
            }
            
          }
        }
        
      }
    }
    if (this.query.order) {
      params.push('order=' + this.query.order)
    }

    url = url.indexOf('?') > -1 ? url + '&' + params.join('&') : url + '?' + params.join('&')
    let ctrl = this
    var p = this.$http.get(url)
    p.then(function (response) {
      ctrl.list = response.data.data
      if(ctrl.list.length === 0 ){
        ctrl.noRequisites = true
        ctrl.emptyTopics = true
      }else{
        ctrl.noRequisites = false
        ctrl.emptyTopics = false
      }
      if(ctrl.section !== 'postulate'){
        ctrl.list.forEach((request)=>{
          ctrl.topics.forEach((topic)=>{
            if(request.question.id_topic == topic.id){
              request.topic = topic
            }
          })
        },ctrl)
      }
      ctrl.pager.total_count = response.data.total_results
      ctrl.loading = false
      ctrl.resetPager()
    })
    this.openCertificate = false
    return true //p
  }
  resetPager() {
    this.pager.total_pages = Math.ceil(this.pager.total_count / this.query.limit)
    this.pager.pages = []
    var min = Math.max(this.query.page - this.pagestoshow, 1)
    this.pager.before = this.query.page > 1
    this.pager.after = this.query.page < this.pager.total_pages
    var max = Math.min(this.pager.total_pages, this.query.page + this.pagestoshow)
    for (min; min <= max; min++) {
      this.pager.pages.push(min)
    }
  }
  prev() {
    this.query.page = Math.max(this.query.page - 1, 1)
    this.resetPager()
    this.getData()
  }
  next() {
    this.query.page = Math.min(this.query.page + 1, this.pager.total_pages)
    this.resetPager()
    this.getData()
  }
  navigate(page) {
    this.query.page = Math.max(Math.min(page, this.pager.total_pages), 1)
    this.resetPager()
    this.getData()
  }
  setService(requisite) {
    this.requisite = requisite
  }
  confirm(requisite) {
    this.openConfirmation = true
    this.selected = requisite
  }
  createRequest(){
    let data = {
      id_answer:this.selected.id,
      id_question:this.selected.id_question,
      id_user:this.$auth.getPayload().id,
      id_service:this.selected.service.id
    }
    this.$http.post(this.requestEndpoint,data).then(()=>{
      this.getData()
    })
  }
}
export default activityEvaluatorController