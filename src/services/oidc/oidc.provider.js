class OidcProvider {
    /* @ngInject */
    constructor() {
        angular.merge(this, {
            setup: this.setup.bind(this),
            getUser: this.getUser.bind(this),
            $get: this.$get.bind(this),
            init: this.init.bind(this)
        })

        this.userData = new Promise((res, rej) => {
            this.userDataPromiseResolve = res
            this.userDataPromiseReject = rej
        })
    }

    setup(options) {
        this.Oidc = new Oidc.UserManager(options)
        this.init()
    }

    init() {
        this.Oidc.getUser().then(u => {
            if (!u) {
                return this.Oidc.querySessionStatus()
                    .then(
                        () => this.Oidc.signinSilent().then(this.init),
                        () => this.Oidc.signinPopup().then(this.init)
                    )
            } else {
                this.userDataPromiseResolve(u)
            }
        })
    }

    getUser() {
        return this.userData
    }

    $get() {
        return this
    }
}

export default ngModule => ngModule.provider('aramexOidc', OidcProvider)
