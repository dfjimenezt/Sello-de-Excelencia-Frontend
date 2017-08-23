class ServiceDetailController {
  constructor($state,$http) {
    'ngInject'
    this.$state = $state
    this.$http = $http
  }
  $onInit() {
    this.pagestoshow = 5
    this.pager = {}
    this.query = {
      limit:20,
      page:1
    }
    this.categories = [
      {
        id: 1,
        name: 'Trámites o servicios en linea'
      },
      {
        id: 2,
        name: 'Datos abiertos'
      },
      {
        id: 3,
        name: 'Ejercicios de participación'
      },
      {
        id: 4,
        name: 'Capacidades de gestión de TI'
      }
    ]
    this.lists = {
      '1': [{
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }],
      '2': [{
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }, {
        id: 1,
        name: 'RUT online',
        level: 3,
        status: {
          name: 'Certificado',
          valid_to: new Date(2018, 12, 12),
          timestamp: new Date()
        },
        rate: 4.15,
        entity: {
          name: 'Ministerio de TIC'
        },
        url: 'http://www.mintic.gov.co'
      }]
    }
    this.selectCategory(this.categories[0])

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Aceptar',
      closeOnSelect: false // Close upon selecting a date,
    })
  }
  getData() {
    this.list = []
    this.loading = true
    var url = '/api/hello'
    if (!url) {
      return
    }
    var params = ['page=' + this.query.page, 'limit=' + this.query.limit]
    if (this.query.filter) {
      params.push('filter=' + this.query.filter)
    }
    if (this.query.fields) {
      for (var field in this.query.fields) {
        var values = this.query.fields[field]
        values.forEach(function (value) {
          params.push('filter_field=' + field + '&filter_value=' + value)
        })
      }
    }
    if (this.query.order) {
      params.push('order=' + this.query.order)
    }

    url = url.indexOf('?') > -1 ? url + '&' + params.join('&') : url + '?' + params.join('&')
    //var p = this.$http.get(url)
    //p.then(function (/*response*/) {
      //this.list = response.data.data
    this.list = this.lists['1']
    this.pager.total_count = this.list.length * 20
    this.loading = false
    this.resetPager()
    //})
    return true //p
  }
  resetPager() {
    this.pager.total_pages = Math.ceil(this.pager.total_count / this.query.limit)
    this.pager.pages = []
    var min = Math.max(this.query.page - this.pagestoshow, 1)
    this.pager.before = this.query.page > 1
    this.pager.after = this.query.page < this.pager.total_pages
    var max = Math.min(this.pager.total_pages, this.query.page + this.pagestoshow)
    for (min ; min <= max ; min++) {
      this.pager.pages.push(min)
    }
  }
  selectCategory(category) {
    this.category = category
    this.getData()
  }

  prev() {
    this.query.page = Math.max(this.query.page - 1, 1)
    this.resetPager()
  }
  next() {
    this.query.page = Math.min(this.query.page + 1, this.pager.total_pages)
    this.resetPager()
  }
  navigate(page) {
    this.query.page = Math.max(Math.min(page, this.pager.total_pages), 1)
    this.resetPager()
  }

  goTo(item){
    this.$state.go('detail',{id:item.id})
  }

}

export default ServiceDetailController