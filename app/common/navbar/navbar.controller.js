class NavbarController {
  constructor($auth,toastr,$state) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
    this.$state = $state
  }

  isAuthenticated() {
    return this.$auth.isAuthenticated()
  }

  getCurrentUser() {
    return this.$auth.getPayload()
  }

  goProfile(){
    if(this.$auth.getPayload().institutions.length >0){
      this.$state.go('entity')
    }else if(this.$auth.getPayload().role === 'Evaluador'){
      this.$state.go('evaluator')
    }else{
      this.$state.go('landingPage')
    }
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
