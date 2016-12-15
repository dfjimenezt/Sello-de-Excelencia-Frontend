class RegisterEvaluatorController {
  constructor(toastr) {
    'ngInject'
    this.toastr = toastr
  }

  $onInit() {
    this.active()
    this.register = {}
    this.register.typeIdentification = 'cc'
    this.register.typeUser = 'expert'
    this.register.timeAvailability = 'hight'
  }

  active() {
    $(document).ready(function() {
      $('select').material_select()
    })
  }

  sendRegister() {
    this.toastr.success('Datos enviada exitosamente','Registro Evaluador')
    // console.log('esto son los datos',this.register)
  }
}

export default RegisterEvaluatorController
