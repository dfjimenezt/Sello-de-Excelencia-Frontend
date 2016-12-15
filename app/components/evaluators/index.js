import angular from 'angular'
import registerEvaluatorComponent from './register/registerEvaluator.component'

const evaluators = angular
  .module('qualityStamp.components.evaluators',[])
  .component('registerEvaluator',registerEvaluatorComponent)
  .name

export default evaluators
