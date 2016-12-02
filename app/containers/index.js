import angular from 'angular';
import homeComponent from './home/home.component';

const containers = angular
  .module('qualityStamp.containers',[])
  .component('home',homeComponent)
  .name

export default containers
