import header from './components/header/header.js'
// import oidcProvider from './services/oidc/oidc.provider.js'

const ngModule = angular.module('aramex', [])

header(ngModule)
// oidcProvider(ngModule)

export default ngModule.name
