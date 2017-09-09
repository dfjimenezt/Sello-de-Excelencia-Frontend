import controller from './serviceevaluator.controller'
import template from './serviceevaluator.html'
import './serviceevaluator.styl'

const serviceEvaluatorComponent = {
  controller,
  template,
  bindings:{
    request:'<'
  }
}

export default serviceEvaluatorComponent