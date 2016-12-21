import angular from 'angular'
import registerEntityComponent from './register/registerEntity.component'

const entities = angular
  .module('qualityStamp.components.entities',[])
  .component('registerEntity',registerEntityComponent)
  .name

export default entities
