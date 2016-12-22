class RegisterEntityController {
  constructor(toastr) {
    'ngInject'
    this.toastr = toastr
  }

  $onInit() {
    this.register = {}
    this.register.agent = {}
    this.register.agent.identification = {}
    this.register.agent.identification.type = 'cc'
  }

  sendRegister() {
    this.toastr.success('Datos enviados exitosamente.','Registrar Entidad')
    // console.log('esto son los datos',this.register)
  }
}

export default RegisterEntityController
