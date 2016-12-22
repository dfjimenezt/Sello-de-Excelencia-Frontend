class SignUpController {
  constructor($state) {
    'ngInject'
    this.$state = $state
  }

  $onInit() {
    // this.activate()
    this.role = 'entity'
  }

  activate() {
    $(document).ready(function() {
      $('select').material_select()
    })
  }

  onSignUp() {
    this.$state.go('registerEvaluator')
  }
}

export default SignUpController
