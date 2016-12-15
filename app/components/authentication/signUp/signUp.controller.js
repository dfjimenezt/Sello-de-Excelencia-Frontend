class SignUpController {
  constructor($state) {
    'ngInject'
    this.$state = $state
  }

  $onInit() {
    $(document).ready(function() {
      $('select').material_select()
    })
  }

  onSignUp() {
    this.$state.go('registerEvaluator')
  }
}

export default SignUpController
