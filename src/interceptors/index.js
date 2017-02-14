import auth from './auth.js'
const ngModule = angular.module('aramex-interceptors', [])

auth(ngModule)

export default ngModule.name
