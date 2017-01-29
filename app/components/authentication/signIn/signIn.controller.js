class SignInController {
  constructor($auth,toastr,$state) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
    this.$state = $state
  }

  $onInit() {
    this.loadding = false
    this.serverError = false
  }

  onSignIn() {
    this.loadding = true
    this.serverError = false
    this.$auth.login(this.credentials)
      .then(() => {
        this.toastr.success('Inicio de sesión exitoso','Iniciar sesión')
        this.loadding = false
        this.$state.go('home')
      })
      .catch(() => {
        this.loadding = false
        this.serverError = true
        this.errorMessage = 'Email o contraseña incorrecta'
        this.toastr.error(this.errorMessage,'Error al iniciar sesión')
      }) 
  }

}

export default SignInController
