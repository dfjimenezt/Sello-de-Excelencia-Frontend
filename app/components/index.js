import angular from 'angular';
import authenticationModule from './authentication';

const components = angular
  .module('qualityStamp.components',[authenticationModule])
  .name

export default components
