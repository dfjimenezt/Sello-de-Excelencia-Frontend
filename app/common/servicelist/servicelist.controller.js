class ServiceDetailController {
  constructor($state,$http,Api) {
    'ngInject'
    this.$state = $state
    this.$http = $http
    this.categoriesEndpoint = Api +'/service/category'
    this.dataEndpoint = Api +'/service/service?filter_field=current_status&filter_value=8&filter_field=id_category&filter_value='
    this.institutionEndpoint = Api +'/place/institution'
    this.getBasic()

  }
  selectedInstitution(item){
    this.query.fields['institution.id'] = item.id
    this.getData()
  }
  selectedService(item){
    this.query.fields['id'] = item.id
    this.getData()
  }
  getBasic() {
    this.$http.get(this.categoriesEndpoint).then((result) => {
      this.categories = result.data.data
      this.selectCategory(this.categories[0])
    })
  }
  $onInit() {
    this.pagestoshow = 5
    this.pager = {}
    this.query = {
      limit:20,
      page:1,
      fields:{}
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
    var url = this.dataEndpoint + this.category.id
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
        if(typeof values === 'object'){
          values.forEach(function (value) {
            params.push('filter_field=' + field + '&filter_value=' + value)
          })
        }else{
          params.push('filter_field=' + field + '&filter_value=' + values)
        }
      }
    }
    if (this.query.order) {
      params.push('order=' + this.query.order)
    }

    url = url.indexOf('?') > -1 ? url + '&' + params.join('&') : url + '?' + params.join('&')
    this.$http.get(url).then((response)=> {
      this.list = response.data.data
      this.pager.total_count = this.list.length
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
    for (min ; min <= max ; min++) {
      this.pager.pages.push(min)
    }
  }
  selectCategory(category) {
    this.category = category
    
    this.getData()
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

  goTo(item){
    this.$state.go('detail',{id:item.id})
  }

}

export default ServiceDetailController