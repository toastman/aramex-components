/* @ngInject */
function config($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor')
}

export default ngModule => ngModule.config(config)
