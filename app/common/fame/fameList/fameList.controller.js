class FameListController {
  constructor($state,$http,Api) {
    'ngInject'
    this.$state = $state
    this.$http = $http
    this.endpoints = {
      'entities':Api+'/configuration/hall_today?id_role=4',
      'community':Api+'/configuration/hall_today?id_role=2'
    }
    this.loading = false
  }
  $onInit() {
    this.titles = {
      'entities' :'Las siguientes son las entidades destacadas por haber recibido la certificación del Sello de Excelencia y haber participado activamente en las actividades propuestas por nuestra plataforma',
      'community' : 'Los siguientes son los evaluadores destacados por haber participado activamente en las actividades propuestas por nuestra plataforma.'
    }
    this.setSection('entities')
  }
  setSection(section) {
    this.section = section
    this.title = this.titles[section]
    this.getData(section)
  }
  getData(section){
    this.loading = true
    this.$http.get(this.endpoints[section]).then((results)=>{
      this.list = results.data
      this.loading = false
    })
  }
}

export default FameListController
