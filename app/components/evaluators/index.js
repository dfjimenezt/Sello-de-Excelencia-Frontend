import angular from 'angular'
import registerEvaluatorComponent from './register/registerEvaluator.component'
import profileEvaluatorComponent from './profile/profileEvaluator.component'
import postulateEvaluatorComponent from './postulate/postulateEvaluator.component'
import activityEvaluatorComponent from './activity/activityEvaluator.component'
import dataEvaluatorComponent from './data/dataEvaluator.component'
import learnEvaluatorComponent from './learn/learnEvaluator.component'
import advanceEvaluatorComponent from './advance/advanceEvaluator.component'
import serviceEvaluatorComponent from './serviceevaluator/serviceevaluator.component'
import chatEvaluatorComponent from './chat/chat.component'

const evaluators = angular
  .module('qualityStamp.components.evaluators',[])
  .component('registerEvaluator',registerEvaluatorComponent)
  .component('profileEvaluator',profileEvaluatorComponent)
  .component('profiledataEvaluator',dataEvaluatorComponent)
  .component('postulateEvaluator',postulateEvaluatorComponent)
  .component('activityEvaluator',activityEvaluatorComponent)
  .component('learnEvaluator',learnEvaluatorComponent)
  .component('advanceEvaluator',advanceEvaluatorComponent)
  .component('serviceEvaluator',serviceEvaluatorComponent)
  .component('chatEvaluator',chatEvaluatorComponent)
  .name

export default evaluators
