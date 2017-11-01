class SignInController {
  constructor($auth,toastr,$state,$http,Api) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
    this.$state = $state
    this.$http = $http
    this.googleEndpoint = Api+'/auth/login_google'
    this.facebookEndpoint = Api+'/auth/login_fb'
    this.serverError = false
  }

  $onInit() {
    this.loadding = false
    this.serverError = false
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
      this.serverError = false
    }).catch(()=>{
      this.$auth.logout()
      this.toastr.error('Sólo los Ciudadanos pueden calificar Servicios')
      this.serverError = true
    })
  }

  onSignIn() {
    this.loadding = true
    this.serverError = false
    this.$auth.login(this.credentials)
      .then(() => {
        if(user.role !== 'Ciudadano'){
          this.$auth.logout()
          this.toastr.error('Sólo los Ciudadanos pueden calificar Servicios')
        }
      })
      .catch(({ data: { error } }) => {
        const CODE_USER_NOT_ACTIVE = 203
        this.loadding = false
        this.serverError = true
        this.errorMessage = 'Email o contraseña incorrecta'
        if (error.code === CODE_USER_NOT_ACTIVE) {
          this.errorMessage = 'Usuario no activo, dirijase a su correo y proceda a activar su cuenta.'
        }
        this.toastr.error(this.errorMessage,'Error al iniciar sesión')
      }) 
  }

}

export default SignInController
