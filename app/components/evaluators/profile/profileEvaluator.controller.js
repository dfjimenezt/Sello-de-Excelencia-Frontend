class profileEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.entity = {name:'Evaluador'}
  }
  $onInit(){
    this.setSection('profile')
  }
  setSection(section){
    this.section = section
  }
}

export default profileEntityController