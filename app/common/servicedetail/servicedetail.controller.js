class ServiceDetailController {
  constructor($state) {
    'ngInject'
    this.$state = $state
  }
  $onInit() {
    this.item = {
      name: 'RUT online',
      level: 3,
      status: {
        name: 'Certificado',
        valid_to: new Date(2018,12,12),
        timestamp: new Date()
      },
      rate: 4.15,
      entity: {
        name: 'Ministerio de TIC'
      },
      url: 'http://www.mintic.gov.co'
    }
  }
}

export default ServiceDetailController