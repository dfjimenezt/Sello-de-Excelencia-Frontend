class SignInController {
  constructor($auth,toastr,$state) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
    this.$state = $state
    this.credentials = {}
  }

  onSignIn() {
    this.$auth.login(this.credentials)
      .then(() => {
        this.toastr.success('Inicio de sesión exitoso','Iniciar sesión')
        this.$state.go('home')
      })
      .catch(() => this.toastr.error('Email o contraseña incorrecta','Error al iniciar sesión'))
  }

}

export default SignInController
