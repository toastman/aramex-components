const serverBase = document.querySelector('base') ? document.querySelector('base').getAttribute('href') : '/',
    defaults = {
        'redirect_uri': window.location.protocol + '//' + window.location.host + serverBase,
        'post_logout_redirect_uri': window.location.protocol + '//' + window.location.host + serverBase,
        'silent_redirect_uri': window.location.protocol + '//' + window.location.host + serverBase + 'silent_renew.html',
        'response_type': 'id_token token',
        'automaticSilentRenew': true,
        'monitorSession': true,
        'filterProtocolClaims': true,
        'loadUserInfo': true
    }

let getUserSuccessCbArr = [],
    getUserErrorCbArr = []

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
        if (!options.authority) {
            console.error('Please set "authority" field for aramexOidcProvider')
            throw new Error()
        }

        this.Oidc = new Oidc.UserManager(angular.merge(defaults, options))

        this.Oidc.events.addUserLoaded(() => {
            this.Oidc.getUser()
                .then(userData => {
                    // $(this).trigger('Oidc_userDataUpdate', userData)
                    this.userData = userData
                    getUserSuccessCbArr.forEach(cb => cb(userData))
                    getUserSuccessCbArr = []
                })
                .catch(err => {
                    if (getUserErrorCbArr.length) {
                        getUserErrorCbArr.forEach(cb => cb(err))
                        getUserErrorCbArr = []
                    } else console.error(`Oidc getUser method fail ${err.stack}`)
                })
        })

        this.Oidc.querySessionStatus()
            .then(
            () => this.Oidc.signinSilent(),
            () => this.Oidc.signinRedirect({ 'acr_values': 'idp:windows' })
            )
    }

    getUser(successCb, errorCb) {
        if (this.userData) return successCb(this.userData)

        if (successCb) getUserSuccessCbArr.push(successCb)
        if (errorCb) getUserErrorCbArr.push(errorCb)
    }

    $get() {
        return this
    }
}

export default ngModule => ngModule.provider('aramexOidc', OidcProvider)
