class dataEvaluatorController {
  constructor(Api, $http) {
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.categories = []
    this.categoriesEndpoint = Api +'/service/category'
    this.getCategories()

  }
  getCategories() {
    console.log(this.categoriesEndpoint)
    this.$http.get(this.categoriesEndpoint).then((result) => {
      this.categories = result.data.data
    })
  }
  toggleCategory(category) {
    var idx = this.register.categories.indexOf(category.id)
    // Is currently selected
    if (idx > -1) {
      this.register.categories.splice(idx, 1)
    }
    // Is newly selected
    else {
      this.register.categories.push(category.id)
    }
  }
  $onInit() {
    this.entity = {
      name: 'Entidad 1'
    }
    this.register = {
      categories: [],
      topics: []
    }
  }
}

export default dataEvaluatorController