import './header.scss'
import template from './header.html'
import controller from './header.controller.js'

const aramexHeader = {
    template,
    controller
}

export default ngModule => ngModule.component('aramexHeader', aramexHeader)
