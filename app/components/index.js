import angular from 'angular'
import authenticationModule from './authentication'
import announcementModule from './announcement'
import newsModule from './news'
import evaluatorsModule from './evaluators'

const components = angular
  .module('qualityStamp.components',[
    authenticationModule,
    announcementModule,
    newsModule,
    evaluatorsModule
  ])
  .name

export default components
