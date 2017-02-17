import base64 from 'Base64'

/* @ngInject */
function run($rootScope, aramexOidc, $location) {
    const redirectToRequestedUrl = () => {
        const requiredUrlBase64 = $location.search()[REQUESTED_URL_PARAM_NAME]

        if (requiredUrlBase64) {
            location.href = atob(requiredUrlBase64)
        }
    }

    aramexOidc.Oidc.getUser().then(redirectToRequestedUrl)

    $rootScope.$on('$locationChangeStart', e => {
        if ($location.search()[REQUESTED_URL_PARAM_NAME]) e.preventDefault()
    })
}

export default ngModule => ngModule.run(run)
