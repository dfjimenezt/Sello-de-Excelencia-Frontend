import angular from 'angular';
import authenticationModule from './authentication';
import announcementModule from './announcement';
import newsModule from './news';

const components = angular
  .module('qualityStamp.components',[authenticationModule,announcementModule,newsModule])
  .name

export default components
