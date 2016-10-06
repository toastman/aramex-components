import './header.scss'
import template from './header.html'

const aramexHeader = {
    template,
    bindings: {
        'isUserInfoAvailable': '<',
        'userName': '@',
        'from': '@',
        'accessTime': '@',
        'lastLogon': '@',
        'accessLevel': '@',
        'accessCode': '@'
    }
}

export default ngModule => ngModule.component('aramexHeader', aramexHeader)
