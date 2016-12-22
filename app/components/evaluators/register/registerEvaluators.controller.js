class RegisterEvaluatorController {
  constructor(toastr) {
    'ngInject'
    this.toastr = toastr
  }

  $onInit() {
    this.register = {}
    this.register.person = {}
    this.register.person.identification = {}
    this.register.person.identification.type = 'cc'
    this.register.evaluator = {}
    this.register.evaluator.typeUser = 'user'
    this.register.evaluator.timeAvailability = 'hight'
  }

  sendRegister() {
    this.toastr.success('Datos enviados exitosamente.','Registrar Evaluador')
    // console.log('esto son los datos',this.register)
  }
}

export default RegisterEvaluatorController
