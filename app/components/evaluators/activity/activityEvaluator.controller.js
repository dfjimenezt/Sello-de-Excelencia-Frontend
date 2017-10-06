class activityEvaluatorController {
  constructor(Api, $http, $state,$auth) {
    'ngInject'
    this.Api = Api
    this.$state = $state
    this.$http = $http
    if(this.$state.current.name.split('.').length === 2){
      this.setSection('asignated')
    }else{
      let array = this.$state.current.name.split('.')
      this.section = array[2]
    }
    this.user = $auth.getPayload()
  }
  setSection(section) {
    this.section = section
    this.$state.go('evaluator.activity.'+section)
  }
  
}
export default activityEvaluatorController