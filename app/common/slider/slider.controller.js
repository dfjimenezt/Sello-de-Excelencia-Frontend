class SliderController {
  $onInit() {
    this.optionsSlider()
  }

  changeSlider(direction) {
    $('.slider').slider(direction)
  }

  optionsSlider() {
    $('.sliderone').slider({'Interval':1000})
    $('.sliderone').slider('pause')
    $('.indicator-item').on('click', () => $('.sliderone').slider('pause'))
  }
}

export default SliderController
