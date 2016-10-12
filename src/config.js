import PopupSigninController from './utils/popup-signin/popup-signin.controller.js'
import SilentRenewController from './utils/silent-renew/silent-renew.controller.js'

/* @ngInject */
function config($stateProvider) {
    $stateProvider.state({
        name: 'silent-renew',
        url: '/silent_renew',
        controller: SilentRenewController,
        template: '<div/>'
    })

    $stateProvider.state({
        name: 'popup-signin',
        url: '/popup_signin',
        controller: PopupSigninController,
        template: '<div/>'
    })
}

export default ngModule => ngModule.config(config)
