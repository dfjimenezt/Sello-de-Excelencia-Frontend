class RegisterEntityController {
  constructor(toastr,Api,$http) {
    'ngInject'
    this.toastr = toastr
    this.Api = Api
    this.$http = $http
  }

  $onInit() {
    this.register = {}
    this.register.entity = {}
    this.register.agent = {}
    this.register.agent.identification = {}
    this.register.agent.identification.type = 'cc'
  }

  getEntities(){
    this.$http.get(this.Api+'/place/institution?filter='+this.hint+'&limit=20').then((results)=>{
      let data = results.data.data
      let autocomplete = {}
      data.forEach(function(element) {
        autocomplete[element.name] = null
      }, this)
      $('input.autocomplete').autocomplete({
        data:autocomplete,
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
      })
    })
  }

  sendRegister() {
    this.toastr.success('Datos enviados exitosamente.','Registrar Entidad')
    // console.log('esto son los datos',this.register)
  }
}

export default RegisterEntityController
