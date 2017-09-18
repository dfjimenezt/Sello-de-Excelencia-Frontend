class SignInController {
  constructor($auth,toastr,$state,$http,Api) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
    this.$state = $state
    this.$http = $http
    this.googleEndpoint = Api+'/auth/login_google'
    this.facebookEndpoint = Api+'/auth/login_fb'
  }

  $onInit() {
    console.log(this)
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

  onSignIn() {
    this.loadding = true
    this.serverError = false
    this.$auth.login(this.credentials)
      .then(() => {
        this.toastr.success('Inicio de sesión exitoso','Iniciar sesión')
        this.loadding = false
        let user = this.$auth.getPayload()
        if(user.tmp_pwd === 1){
          this.$state.go('changePwd')
        }else if(user.institutions.length >0){
          this.$state.go('entity.postulate')
        }else if(user.role === 'Evaluador'){
          this.$state.go('evaluator.activity')
        }else{
          this.$state.go('landingPage')
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
