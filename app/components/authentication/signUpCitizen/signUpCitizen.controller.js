class SignUpCitizenController {
  constructor($state,AuthService,toastr,$auth, Api) {
    'ngInject'
    this.$state = $state
    this.$auth = $auth
    this.AuthService = AuthService
    this.toastr = toastr
    this.modalElement = $('.modal')
    this.googleEndpoint = Api+'/auth/login_google'
    this.facebookEndpoint = Api+'/auth/login_fb'
  }

  $onInit() {
    console.log(this)
    this.loadding = false
    this.modalElement.modal()
  }
  authenticate(provider) {
    this.$auth.authenticate(provider).then((response)=>{
      if(provider === 'google'){
        return this.$http.post(this.googleEndpoint,{token:response.access_token})
      }
      if(provider === 'facebook'){
        return this.$http.post(this.facebookEndpoint,{token:response.access_token})
      }
    }).then((response)=>{
      this.$auth.setToken(response.data.token)
    }).catch((error)=>{
      if (error.message) {
        // Satellizer promise reject error.
        this.toastr.error(error.message)
      } else if (error.data) {
        // HTTP response error from server
        this.toastr.error(error.data.message, error.status)
      } else {
        this.toastr.error(error)
      }
    })
  }
  onSignUp() {
    this.loadding = true
    this.serverError = false
    const user = {
      name: this.name,
      lastname : this.lastname,
      email : this.email,
      password: this.password,
      terms: 1,
      role: 1
    }
    this.AuthService.signUp(user)
      .then(data => {
        this.loadding = false
        if (data.error.code) {
          this.serverError = true
          this.errorMessage = 'El email ingresado está registrado con otro usuario.'
          this.toastr.error(this.errorMessage,'Error en el registro')
          return
        }
        this.succeed = true
        this.succeedMessage = 'Hemos enviado un mensaje al correo electrónico registrado. Por favor verifique su cuenta'

        //this.modalElement.modal('open')
      })
  }

  onClickModal() {
    this.modalElement.modal('close')
    this.$state.go('signIn')
  }
}

export default SignUpCitizenController
