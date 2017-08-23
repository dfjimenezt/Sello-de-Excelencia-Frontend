class SliderController {
  constructor($http, Api) {
    'ngInject'
    this.$http = $http
    this.Api = Api
    this.templates = {
      'simple': `<li class="white">
                  <div class="caption left-align">
                  <img src="assets/img/sell_gel.png" class="slider-img left" title="sello de experiencia">
                  <h5 class="color-lightseagreen font-bold">{{NAME}}</h5>
                <p class=" black-text">
                  {{TEXT}}
                </p>
                </div>
                </li>`
    }
  }
  $onInit() {
    this.getData()
  }

  changeSlider(direction) {
    $('.slider').slider(direction)
  }

  optionsSlider() {
    $('.sliderone').slider({ 'Interval': 1000 })
    $('.sliderone').slider('pause')
    $('.indicator-item').on('click', () => $('.sliderone').slider('pause'))
  }


  getData() {
    this.$http.get(this.Api + '/forum/banner').then((results) => {
      this.banners = results.data.data.sort((a, b) => {
        return a.position > b.position
      })
      let inner = ''
      this.banners.forEach((item) => {
        if (item.id_type_banner === 1) {
          let i = this.templates['simple'].replace('{{TEXT}}', item.text)
          i = i.replace('{{NAME}}', item.name)
          inner += i
        }if (item.id_type_banner === 2) {
          let i = this.templates['simple'].replace('{{TEXT}}', item.text)
          i = i.replace('{{NAME}}', item.name)
          inner += i
        }
      })
      $('.slides').html(inner)
      this.optionsSlider()
    })
  }

}

export default SliderController
