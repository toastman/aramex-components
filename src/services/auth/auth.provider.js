const defaults = {
    'api_host': ''
}

class AuthProvider {
    /* @ngInject */
    constructor() {
        angular.merge(this, defaults, {
            setup: this.setup.bind(this),
            getApiHost: this.getApiHost.bind(this),
            $get: this.$get.bind(this)
        })
    }

    setup(options) {
        angular.merge(this, options)
    }

    getApiHost() {
        return this.api_host
    }

    $get() {
        return this
    }
}

export default ngModule => ngModule.provider('aramexAuth', AuthProvider)
