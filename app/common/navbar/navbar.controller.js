class NavbarController {
  constructor($auth,toastr,$state,Api,$http) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
    this.$state = $state
    this.$http = $http
    this.logoEndpoint = Api + '/configuration/config'
  }

  $onInit(){
    this.$http.get(this.logoEndpoint).then((result)=>{
      this.logo_header = result.data.data[0].header
    })
  }
  isAuthenticated() {
    return this.$auth.isAuthenticated()
  }

  getCurrentUser() {
    return this.$auth.getPayload()
  }

  goProfile(){
    if(this.$auth.getPayload().role === 'Entidad'){
      this.$state.go('entity.postulate')
    }else if(this.$auth.getPayload().role === 'Evaluador'){
      this.$state.go('evaluator.activity')
    }else{
      this.$state.go('landingPage')
    }
  }
  goChangePwd(){
    this.$state.go('changePwd')
  }

  logout() {
    this.toastr.info('Cerraste sesión, vuelve pronto...','Cerrar sesión')
    this.$auth.logout()
    this.$state.go('landingPage')
  }
  
  changeFontSize(size) {
    const fontSize = $('body').css('font-size').split('px')
    let currentSize = Number(fontSize[0])

    if (size === 'increase'){
      currentSize += 5
    } else {
      currentSize -= 5
    }

    $('body').css({'font-size': `${currentSize}px`})
  }

}

export default NavbarController
