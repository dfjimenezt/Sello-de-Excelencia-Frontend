class activityEvaluatorController {
  constructor(Api, $http,$auth) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.pagestoshow = 5
    this.pager = {}
    this.query = {
      limit: 20,
      page: 1,
      fields:{
        id_user:[$auth.getPayload().id]
      }
    }
    this.requestEndpoint = Api +'/question/evaluation_request'
  }
  $onInit() {
    this.setSection('asignated')
    
  }
  reset(){
    this.requisite = null
    this.getData()
  }
  setSection(section) {
    this.section = section
    if(this.section === 'asignated'){
      this.query.fields.id_request_status = [1]
    }
    if(this.section === 'proccess'){
      this.query.fields.id_request_status = [3,2,6]
    }
    if(this.section === 'finished'){
      this.query.fields.id_request_status = [4,5]
    }
    this.getData()
  }
  getData() {
    this.list = []
    this.loading = true
    var url = this.requestEndpoint
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
        values.forEach(function (value) {
          params.push('filter_field=' + field + '&filter_value=' + value)
        })
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
      ctrl.pager.total_count = ctrl.list.length
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
  }
  next() {
    this.query.page = Math.min(this.query.page + 1, this.pager.total_pages)
    this.resetPager()
  }
  navigate(page) {
    this.query.page = Math.max(Math.min(page, this.pager.total_pages), 1)
    this.resetPager()
  }
  setService(requisite) {
    this.requisite = requisite
  }
}
export default activityEvaluatorController