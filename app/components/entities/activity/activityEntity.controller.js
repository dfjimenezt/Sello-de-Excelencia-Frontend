class activityEntityController {
  constructor(Api, $http, $auth) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.pagestoshow = 5
    this.pager = {}
    this.query = {
      limit: 20,
      page: 1,
      fields: {
        id_institution:[$auth.getPayload().institutions[0].id]
      }
    }
    this.serviceEndpoint = Api + '/service/service'
  }
  $onInit() {
    this.setSection('certified')
  }
  setSection(section) {
    if (section === this.section) {
      return
    }
    this.section = section
    if (section === 'certified') {
      this.query.fields.current_status = ['8']
    }
    if (section === 'proccess') {
      this.query.fields.current_status = ['5']
    }
    if (section === 'rejected') {
      this.query.fields.current_status = ['9']
    }
    this.getData()
  }
  getData() {
    this.list = []
    this.loading = true
    var url = this.serviceEndpoint
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
    this.$http.get(url).then(function (response) {
      ctrl.list = response.data.data
      ctrl.pager.total_count = ctrl.list.length
      ctrl.loading = false
      ctrl.resetPager()
    })
    this.openCertificate = false
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
  setService(service) {
    this.service = service
    
  }
  onCertificate(service) {
    this.openCertificate = true
    this.certificate = {
      entity: service.institution.name,
      level: service.status.level,
      product: service.name,
      date: new Date()
    }
  }
  
}
export default activityEntityController