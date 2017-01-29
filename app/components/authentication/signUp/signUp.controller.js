class SignUpController {
  constructor($state,AuthService,toastr) {
    'ngInject'
    this.$state = $state
    this.AuthService = AuthService
    this.toastr = toastr
    this.modalElement = $('.modal')
  }

  $onInit() {
    this.roles = [
      { id:1, name: 'Ciudadano'},
      { id:2, name: 'Evaluador' },
      { id:4, name: 'Entidad' }
    ]
    this.serverError = false
    this.role = this.roles[0]
    this.modalElement.modal()
  }

  onSignUp() {
    this.serverError = false
    const user = {
      email : this.email,
      password: this.password,
      role: this.role.id
    }
    this.AuthService.signUp(user)
      .then(data => {
        if (data.error) {
          this.serverError = true
          this.errorMessage = 'El email ingresado está registrado con otro usuario.'
          return this.toastr.error(this.errorMessage,'Error en el registro')
        }
        this.modalElement.modal('open')
      })
  }

  onClickModal() {
    this.modalElement.modal('close')
    this.$state.go('signIn')
  }
}

export default SignUpController
