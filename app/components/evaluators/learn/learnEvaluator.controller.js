class learnEvaluatorController {
  constructor(Api, $http) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.learnEndpoint = Api + '/forum/hangouts?filter_field=id_role&filter_value=2'
    this.playing = false
  }
  setSelected(item){
    this.selected = item
  }
  goLive(){
    this.playing = true
  }
  $onInit() {
    this.pagestoshow = 5
    this.pager = {}
    this.query = {
      limit:20,
      page:1,
      fields:{}
    }
    this.getData()
  }
  getData() {
    this.list = []
    this.loading = true
    var url = this.learnEndpoint
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
      this.setSelected(this.list[0])
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

export default learnEvaluatorController