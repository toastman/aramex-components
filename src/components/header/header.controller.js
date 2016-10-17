class HeaderController {
    /* @ngInject */
    constructor(aramexOidc, $filter, $scope) {
        aramexOidc.getUser().then(data => {
            this.userName = data.profile.name
            this.from = `${data.profile.company_name} - ${data.profile.company_code}`
            this.accessTime = $filter('date')(data.profile.auth_time * 1000, 'h:mm')
            this.lastLogon = $filter('date')(data.profile.auth_time * 1000, 'M/d/yy h:mm')
            this.accessLevel = 2
            this.accessCode = data.profile.company_code
            this.isUserInfoAvailable = true
            $scope.$apply()
        })
    }
}

export default HeaderController
