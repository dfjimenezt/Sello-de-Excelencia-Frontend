class profileEntityController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.entity = {name:'Entidad'}
  }
  $onInit(){
    this.setSection('activity')
  }
  setSection(section){
    this.section = section
  }
}

export default profileEntityController