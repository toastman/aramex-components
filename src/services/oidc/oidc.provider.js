import 'babel-polyfill'
import OidcClient from '../../../node_modules/oidc-client/lib/oidc-client.min.js'

class OidcProvider {
    /* @ngInject */
    constructor() {
        angular.merge(this, {
            setup: this.setup.bind(this),
            getUser: this.getUser.bind(this),
            $get: this.$get.bind(this)
        })
    }

    setup(options) {
        this.Oidc = new OidcClient.UserManager(options)
    }

    getUser() {
        this.Oidc.getUser()
            .then(u => {
                if (!u) {
                    this.Oidc.signinRedirectCallback()
                        .then(this.getUser, this.Oidc.signinRedirect)
                } else {
                    console.log('User: ', u)
                }
            })
            .catch(err => console.error('OIDC getUser', err.stack))
    }


    // onUpdate(data) {
    // this.$rootScope.$emit('oidcclient-userinfo-changed-event', data)
    // }

    $get() {
        return this
    }
}

export default ngModule => ngModule.provider('aramexOidc', OidcProvider)
