import oidc from './oidc/oidc.provider.js'
import auth from './auth/auth.provider.js'
import cookies from './cookies.service'

const ngModule = angular.module('aramex-services', [])

oidc(ngModule)
auth(ngModule)
cookies(ngModule)

export default ngModule.name
