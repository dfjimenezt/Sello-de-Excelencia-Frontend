class SliderController {
  $onInit() {
    $('.slider').slider({'Transition':5000})
  }

  changeSlider(direction) {
    $('.slider').slider(direction)
  }
}

export default SliderController
