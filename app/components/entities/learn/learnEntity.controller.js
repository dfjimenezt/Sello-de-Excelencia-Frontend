class learnEntityController {
  constructor(Api, $http) {
    'ngInject'
    this.Api = Api
    this.$http = $http
  }
  $onInit() {
    this.list = [{
      name: 'Gobierno en Linea - UX',
      description: 'Novedades y tendencias para mejorar la experiencia de usuaio en sitios gubernamentales',
      image: 'http://lorempixel.com/400/400',
      date: new Date()
    },
    {
      name: 'Gobierno en Linea - UX',
      description: 'Novedades y tendencias para mejorar la experiencia de usuaio en sitios gubernamentales',
      image: 'http://lorempixel.com/400/400',
      date: new Date()
    },
    {
      name: 'Gobierno en Linea - UX',
      description: 'Novedades y tendencias para mejorar la experiencia de usuaio en sitios gubernamentales',
      image: 'http://lorempixel.com/400/400',
      date: new Date()
    },
    {
      name: 'Gobierno en Linea - UX',
      description: 'Novedades y tendencias para mejorar la experiencia de usuaio en sitios gubernamentales',
      image: 'http://lorempixel.com/400/400',
      date: new Date()
    },
    {
      name: 'Gobierno en Linea - UX',
      description: 'Novedades y tendencias para mejorar la experiencia de usuaio en sitios gubernamentales',
      image: 'http://lorempixel.com/400/400',
      date: new Date()
    },
    {
      name: 'Gobierno en Linea - UX',
      description: 'Novedades y tendencias para mejorar la experiencia de usuaio en sitios gubernamentales',
      image: 'http://lorempixel.com/400/400',
      date: new Date()
    }
    ]
    this.setSelected(this.list[0])
  }
  setSelected(item) {
    this.selected = item
  }
}

export default learnEntityController