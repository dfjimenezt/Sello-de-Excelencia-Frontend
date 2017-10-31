class activityEntityListController {
  constructor(Api, $http, $auth ,toastr,$state) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.$state = $state
    this.pagestoshow = 5
    this.loading = false
    this.toastr = toastr
    this.pager = {
      total_pages: 0
    }
    this.query = {
      limit: 20,
      page: 1,
      fields: {
        id_institution: [$auth.getPayload().institutions[0].id]
      }
    }
    this.levels = []
    this.serviceEndpoint = Api + '/service/service?simple=false'
    this.renewEndpoint = Api + '/service/service?renew=true&id='
    this.upgradeEndpoint = Api + '/service/service?upgrade=true&id='
    this.pdfEndpoint = Api + '/service/service?certificate=true&id='
    this.openSelector = false
  }
  $onInit() {
    if(this.$state.current.name.indexOf('.') === -1){
      this.setSection('certified')
    }else{
      let array = this.$state.current.name.split('.')
      this.setSection(array[array.length-1])
      
    }
  }
  setSection(section) {
    if (section === this.section) {
      return
    }
    this.section = section
    if (section === 'certified') {
      var date = new Date()
      this.query.fields['history.id_status'] = ['8']
      this.query.fields['history.valid_to'] = ['> '+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()]
    }
    if (section === 'validation') {
      this.query.fields.current_status = ['1']
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
      if(ctrl.section ==='certified'){
        ctrl.list.forEach((item)=>{
          item.certified = true
        })
      }
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
    this.$state.go('entity.activity.detail', { 'service': service })
  }
  onCertificate(service) {
    window.open(this.pdfEndpoint+service.id)
  }
  onFinishUpgrade(){
    this.selectedService.current_status = 10 //Incomplete
    this.selectedService.level = this.level
    this.$http.put(this.serviceEndpoint,this.selectedService).then(()=>{
      this.toastr.success('El servicio está ahora disponible para completar los requisitos')
      this.openSelector = false
    })
  }
  onUpgrade(service) {
    this.selectedService = service
    this.openSelector = true
    this.levels = []
    for(var i = service.status.level +1; i <= 3 ; i++){
      this.levels.push(i)
    }
  }
  onRenew(service) {
    service.current_status = 10 //Incomplete
    this.$http.put(this.serviceEndpoint,service).then(()=>{
      this.toastr.success('El servicio está ahora disponible para completar los requisitos')
    })
  }

}
export default activityEntityListController