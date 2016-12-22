class SignUpController {
  constructor($state) {
    'ngInject'
    this.$state = $state
  }

  $onInit() {
    this.role = 'entity'
  }

  onSignUp() {
    if (this.role === 'entity'){
      this.$state.go('registerEntity')
    } else {
      this.$state.go('registerEvaluator')
    }
  }
}

export default SignUpController
