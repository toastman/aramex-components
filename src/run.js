const defaults = {
    'cookieNameRequiredUrl': 'aramexRequiredUrl'
},
    getParamsObjFromUrl = url => {
        const paramsString = url.split('?')[1]
        let paramsObj = {}

        if (paramsString) {
            paramsObj = paramsString
                .split('&')
                .reduce((p, c) => {
                    if (!c) return p
                    const prop = c.split('=')

                    return Object.assign(p, { [prop[0]]: prop[1] })
                }, {})
        }

        return paramsObj
    }

/* @ngInject */
function run($rootScope, aramexOidc, cookiesService, $location) {
    let onceRedirected = false
    const redirectToRequestedUrl = () => {
        if (onceRedirected) return

        const requiredUrlCookie = cookiesService.getCookie(defaults.cookieNameRequiredUrl),
            requiredUrlParams = getParamsObjFromUrl(requiredUrlCookie),
            requiredUrl = requiredUrlCookie ? requiredUrlCookie.split('?')[0] : ''

        if (!requiredUrlCookie) {
            cookiesService.setCookie(defaults.cookieNameRequiredUrl, $location.url())
        } else {
            onceRedirected = true
            cookiesService.deleteCookie(defaults.cookieNameRequiredUrl)
            if (requiredUrlCookie !== $location.url()) {
                $location.path(requiredUrl).search(requiredUrlParams)
            }
        }
    }

    aramexOidc.Oidc.getUser().then(redirectToRequestedUrl)

    $rootScope.$on('$locationChangeStart', e => {
        const requiredUrlCookie = cookiesService.getCookie(defaults.cookieNameRequiredUrl)

        if (requiredUrlCookie && requiredUrlCookie !== $location.url()) {
            e.preventDefault()
            redirectToRequestedUrl()
        }
    })
}

export default ngModule => ngModule.run(run)
