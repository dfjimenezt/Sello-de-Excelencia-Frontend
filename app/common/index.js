import angular from 'angular'
import landingPage from './landingPage/landingPage.component'
import navbarComponent from './navbar/navbar.component'
import sliderComponent from './slider/slider.component'
import footerComponent from './footer/footer.component'
import moreInformationComponent from './moreInformation/moreInformation.component'
import termsComponent from './terms/terms.component'
import categoriesModule from './categories'
import modalComponent from './modal/modal.component'

const common = angular
  .module('qualityStamp.common',[categoriesModule])
  .component('landingPage',landingPage)
  .component('navbar',navbarComponent)
  .component('slider', sliderComponent)
  .component('footerApp',footerComponent)
  .component('moreInformation',moreInformationComponent)
  .component('terms',termsComponent)
  .component('modalApp',modalComponent)
  .name

export default common
