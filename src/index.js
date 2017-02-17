import './interceptors/'
import './components/'
import './services/'
import 'Base64'
import config from './config.js'
import run from './run.js'

const ngModule = angular.module('aramex', [
    'aramex-interceptors',
    'aramex-services',
    'aramex-components'
])

config(ngModule)
run(ngModule)

export default ngModule.name
