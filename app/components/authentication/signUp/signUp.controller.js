class SignUpController {
  constructor($state,AuthService,toastr,$auth) {
    'ngInject'
    this.$state = $state
    this.$auth = $auth
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
    this.loadding = false
    this.serverError = false
    this.role = this.roles[0]
    this.modalElement.modal()
  }
  authenticate(provider) {
    this.$auth.authenticate(provider)
  }
  onSignUp() {
    this.loadding = true
    this.serverError = false
    const user = {
      email : this.email,
      password: this.password,
      role: this.role.id
    }
    this.AuthService.signUp(user)
      .then(data => {
        this.loadding = false
        if (data.error) {
          this.serverError = true
          this.errorMessage = 'El email ingresado está registrado con otro usuario.'
          this.toastr.error(this.errorMessage,'Error en el registro')
          return
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
