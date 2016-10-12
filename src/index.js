import header from './components/header/header.js'
// import config from './config.js'
import oidcProvider from './services/oidc/oidc.provider.js'

const ngModule = angular.module('aramex', [])

// config(ngModule)
header(ngModule)
oidcProvider(ngModule)

export default ngModule.name
