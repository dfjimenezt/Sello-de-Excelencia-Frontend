import controller from './serviceitem.controller'
import template from './serviceitem.html'
import './serviceitem.styl'

const serviceItemComponent = {
  controller,
  template,
  bindings:{
    item:'<',
    onSelected:'&',
    onCertificate:'&',
    onRejected:'&'
  }
}

export default serviceItemComponent