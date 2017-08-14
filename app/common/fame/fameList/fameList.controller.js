class FameListController {
  constructor($state) {
    'ngInject'
    this.$state = $state
  }
  $onInit(){
    this.list = [
      {id:1, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:2, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:3, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:4, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:5, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:6, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:7, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:8, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:9, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'},
      {id:10, name: 'Ministerio TIC', img: 'assets/img/postular.png', url: 'http://mintic.gov.co'}
    ]
  }
}

export default FameListController
