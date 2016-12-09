import angular from 'angular'
import navbarComponent from './navbar/navbar.component'
import sliderComponent from './slider/slider.component'
import footerComponent from './footer/footer.component'
import categoriesModule from './categories'

const common = angular
  .module('qualityStamp.common',[categoriesModule])
  .component('navbar',navbarComponent)
  .component('slider', sliderComponent)
  .component('footerApp',footerComponent)
  .name

export default common
