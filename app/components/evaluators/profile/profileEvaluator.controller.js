class profileEntityController{
  constructor(Api,$http,$stateParams){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.entity = {name:'Evaluador'}
    this.tabs = {
      'perfil':'profile',
      'evaluaciones':'evaluate',
      'aprende-ensena':'learn',
      'avance':'advance',
    }
    this.setSection(this.tabs[$stateParams.tabId] || 'profile')
  }
  $onInit(){
    
  }
  setSection(section){
    this.section = section
    
  }
}

export default profileEntityController