import angular from 'angular'
import registerEntityComponent from './register/registerEntity.component'
import profileEntityComponent from './profile/profileEntity.component'
import dataEntityComponent from './data/dataEntity.component'
import postulateEntityComponent from './postulate/postulateEntity.component'
import activityEntityComponent from './activity/activityEntity.component'
import learnEntityComponent from './learn/learnEntity.component'
import advanceEntityComponent from './advance/advanceEntity.component'
import serviceEntityComponent from './entityservice/entityservice.component'
import chatEntityComponent from './chat/chat.component'
const entities = angular
  .module('qualityStamp.components.entities',[])
  .component('registerEntity',registerEntityComponent)
  .component('profileEntity',profileEntityComponent)
  .component('profiledataEntity',dataEntityComponent)
  .component('postulateEntity',postulateEntityComponent)
  .component('activityEntity',activityEntityComponent)
  .component('learnEntity',learnEntityComponent)
  .component('advanceEntity',advanceEntityComponent)
  .component('serviceEntity',serviceEntityComponent)
  .component('chatEntity',chatEntityComponent)
  .name

export default entities
