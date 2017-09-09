import controller from './requisite.controller'
import template from './requisite.html'
import './requisite.styl'

const requisiteComponent = {
  controller,
  template,
  bindings: {
    item: '=',
    onSave: '&',
    onMoreInformation: '&',
    onReject: '&'
  }
}

export default requisiteComponent