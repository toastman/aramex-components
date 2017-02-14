class HeaderController {
    /* @ngInject */
    constructor(aramexOidc, $filter, $scope) {
        aramexOidc.getUser(data => {
            this.userName = data.profile.name
            this.from = `${data.profile.company_name} - ${data.profile.company_code}`
            this.accessTime = $filter('date')(data.profile.auth_time * 1000, 'h:mm')
            this.lastLogon = $filter('date')(data.profile.auth_time * 1000, 'M/d/yy h:mm')
            this.accessLevel = data.profile.access_level
            this.accessCode = data.profile.access_code
            this.isUserInfoAvailable = true
            $scope.$apply()
        })
    }
}

export default HeaderController
