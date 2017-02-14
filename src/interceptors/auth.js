
class AuthService {
    /* @ngInject */
    constructor($q, $injector) {
        angular.extend(this, {
            $q,
            $injector,
            API_HOST: $injector.get('aramexAuth').getApiHost(),
            request: this.request.bind(this),
            requestError: this.requestError.bind(this),
            responseError: this.responseError.bind(this)
        })
    }

    request(config) {
        const deferred = this.$q.defer(),
            successCb = authData => {
                if (this.isApiRequest(config.url)) {
                    config.url = `${this.API_HOST}${config.url}`
                    config.headers.Authorization = `Bearer ${authData.access_token}`
                    config.headers['Content-Type'] = 'application/json'
                    config.headers.Accept = 'application/json'
                }

                if (config.method !== 'GET' && config.method !== 'POST') {
                    config.headers['X-HTTP-Method-Override'] = config.method
                    config.method = 'POST'
                }

                deferred.resolve(config)
            },
            errorCb = err => {
                console.error('Authorization failed ', err.stack)
                deferred.resolve(config)
            }

        this.$injector.get('aramexOidc').getUser(successCb, errorCb)

        return deferred.promise
    }

    requestError(rejection) {
        return this.handleUnAuthorizedState(rejection)
    }

    response(config) {
        return config
    }

    responseError(rejection) {
        return this.handleUnAuthorizedState(rejection)
    }

    isApiRequest(url) {
        return /\/api\//.test(url)
    }

    handleUnAuthorizedState(rejection) {
        // let userService = this.$injector.get('userService')
        // if (rejection.status === 401) {
        //     return userService.logout()
        // }

        return this.$q.reject(rejection)
    }

    static authFactory($q, $injector) {
        return new AuthService($q, $injector)
    }
}

AuthService.authFactory.$inject = ['$q', '$injector']

export default ngModule => ngModule.factory('authInterceptor', AuthService.authFactory)
