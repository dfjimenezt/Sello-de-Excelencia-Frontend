/*global saveAs*/
class ServiceDetailController {
  constructor($state, $http, Api, $stateParams) {
    'ngInject'
    this.$state = $state
    this.$stateParams = $stateParams
    this.$http = $http
    this.categoriesEndpoint = Api + '/service/category'
    this.dataEndpoint = Api + '/service/service?simple=false&filter_field=current_status&filter_value=8'
    this.institutionEndpoint = Api + '/place/institution'
    this.downloadEndpoint = Api + '/platform/export'
    this.category = null
    this.getBasic()
  }
  selectedInstitution(item) {
    if(item){
      this.query.fields['institution.id'] = item.id
    }else{
      delete this.query.fields['institution.id'] 
    }
    
    this.getData()
  }
  selectedService(item) {
    if(item){
      this.query.fields['id'] = item.id
    }else{
      delete this.query.fields['id']
    }
    this.getData()
  }
  getBasic() {
    this.loading = true
    this.$http.get(this.categoriesEndpoint).then((result) => {
      this.categories = result.data.data
      if(this.$stateParams.idEntity){
        this.$http.get(this.institutionEndpoint+'?id='+this.$stateParams.idEntity)
        .then((result)=>{
          this.selectedInstitution(result.data.data[0])
        })
      }else{
        this.selectCategory(this.categories[0])
      }
    })
  }
  $onInit() {
    this.pagestoshow = 5
    this.pager = {
      total_pages: 0
    }
    this.query = {
      limit: 20,
      page: 1,
      fields: {}
    }
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Aceptar',
      closeOnSelect: false // Close upon selecting a date,
    })
  }
  getData() {
    this.list = []
    this.loading = true


    var url = this.dataEndpoint
    if(this.category != null){
      url += '&filter_field=id_category&filter_value='+this.category.id
    }

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
        if (typeof values === 'object') {
          values.forEach(function (value) {
            params.push('filter_field=' + field + '&filter_value=' + value)
          })
        } else {
          params.push('filter_field=' + field + '&filter_value=' + values)
        }
      }
    }
    if (this.query.order) {
      params.push('order=' + this.query.order)
    }

    url = url.indexOf('?') > -1 ? url + '&' + params.join('&') : url + '?' + params.join('&')
    this.$http.get(url).then((response) => {
      this.list = response.data.data
      this.pager.total_count = response.data.total_results
      this.loading = false
      this.resetPager()
    })
    return true
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
  selectCategory(category) {
    this.category = category
    this.getData()
  }

  prev() {
    this.query.page = Math.max(this.query.page - 1, 1)
    this.getData()
  }
  next() {
    this.query.page = Math.min(this.query.page + 1, this.pager.total_pages)
    this.getData()
  }
  navigate(page) {
    this.query.page = Math.max(Math.min(page, this.pager.total_pages), 1)
    this.getData()
  }

  goTo(item) {
    this.$state.go('detail', { id: item.id })
  }
  download() {
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
      return buf
    }
    let params = ['table=service']
    this.$http.get(this.downloadEndpoint+'?' + params.join('&')).then(function (response) {
      var data = response.data
      var blob = new Blob([s2ab(data)], { type: 'application/octet-stream' })
      var d = new Date()
      d = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds()
      saveAs(blob, 'estadisticas_bupre_' + d + '.xlsx')
    })
  }

}

export default ServiceDetailController