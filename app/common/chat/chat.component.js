import controller from './chat.controller'
import template from './chat.html'
import './chat.styl'

const chatComponent ={
  template,
  controller,
  bindings:{
    service:'<',
    item:'<'
  }
}

export default chatComponent