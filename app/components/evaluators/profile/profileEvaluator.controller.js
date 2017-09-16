class profileEntityController {
  constructor(Api, $http, $state,$auth) {
    'ngInject'
    this.Api = Api
    this.$state = $state
    this.$http = $http
    if(this.$state.current.name.indexOf('.') === -1){
      this.setSection('profile')
    }else{
      let array = this.$state.current.name.split('.')
      this.section = array[array.length-1]
    }
    this.user = $auth.getPayload()
  }
  setSection(section) {
    this.section = section
    this.$state.go('evaluator.'+section)
  }
}

export default profileEntityController