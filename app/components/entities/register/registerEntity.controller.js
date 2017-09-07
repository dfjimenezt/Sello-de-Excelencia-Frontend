class RegisterEntityController {
  constructor(toastr,Api,$http) {
    'ngInject'
    this.toastr = toastr
    this.Api = Api
    this.$http = $http
    this.institutionEndpoint = Api +'/place/institution'
  }

  $onInit() {
    this.register = {}
    this.register.entity = {}
    this.register.agent = {}
    this.register.agent.identification = {}
    this.register.agent.identification.type = 'cc'
  }
  selectedInstitution(item){
    this.register.entity = item
  }

  sendRegister() {
    this.toastr.success('Datos enviados exitosamente.','Registrar Entidad')
    // console.log('esto son los datos',this.register)
  }
}

export default RegisterEntityController
