class activityEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.pagestoshow = 5
    this.pager = {}
    this.query = {
      limit:20,
      page:1
    }
  }
  $onInit(){
    this.setSection('certified')
    this.getData()
  }
  setSection(section){
    this.section = section
  }
  getData() {
    this.list = []
    this.loading = true
    var url = '/api/hello'
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
    //var p = this.$http.get(url)
    //p.then(function (/*response*/) {
      //this.list = response.data.data
    this.list = [{
      id:5,
      name:'Servicio de Prueba',
      level: 1,
      status:{
        id:1,
        timestamp: new Date(),
        valid_to: new Date(2018,12,12)
      },
      category:{
        name:'Datos Abiertos'
      }
    },{
      id:5,
      name:'Servicio de Prueba',
      level: 1,
      status:{
        id:1,
        timestamp: new Date(),
        valid_to: new Date(2018,12,12)
      },
      category:{
        name:'Datos Abiertos'
      }
    },{
      id:5,
      name:'Servicio de Prueba',
      level: 1,
      status:{
        id:1,
        timestamp: new Date(),
        valid_to: new Date(2018,12,12)
      },
      category:{
        name:'Datos Abiertos'
      }
    }]
    this.pager.total_count = this.list.length * 20
    this.loading = false
    this.resetPager()
    //})
    return true //p
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
    this.$state.go('progress',{id:item.id})
  }
}
export default activityEntityController