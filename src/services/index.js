import oidc from './oidc/oidc.provider.js'
import auth from './auth/auth.provider.js'

const ngModule = angular.module('aramex-services', [])

oidc(ngModule)
auth(ngModule)

export default ngModule.name
