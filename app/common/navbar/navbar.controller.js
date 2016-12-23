class NavbarController {
  constructor($auth,toastr) {
    'ngInject'
    this.$auth = $auth
    this.toastr = toastr
  }

  isAuthenticated() {
    return this.$auth.isAuthenticated()
  }

  getCurrentUser() {
    return this.$auth.getPayload()
  }

  logout() {
    this.toastr.info('Cerraste sesión, vuelve pronto...','Cerrar sesión')
    this.$auth.logout()
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
