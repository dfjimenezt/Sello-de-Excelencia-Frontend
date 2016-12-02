class SliderController {
  $onInit() {
    $('.slider').slider({'Transition':3000});
  }

  changeSlider(direction) {
    $('.slider').slider(direction);
  }
}

export default SliderController
