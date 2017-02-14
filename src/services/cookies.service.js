class CookiesService {
    constructor() {
        this.setCookie = this.setCookie.bind(this)
        this.getCookie = this.getCookie.bind(this)
        this.deleteCookie = this.deleteCookie.bind(this)
    }

    setCookie(cname, cvalue, exdays = 1) {
        let d = new Date()

        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        const expires = `expires=${d.toUTCString()}`

        document.cookie = `${cname}=${cvalue};${expires};path=/;`
    }

    getCookie(cname) {
        const name = `${cname}=`

        let decodedCookie = decodeURIComponent(document.cookie),
            ca = decodedCookie.split(';')

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]

            while (c.charAt(0) == ' ') {
                c = c.substring(1)
            }

            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ''
    }

    deleteCookie(cname) {
        if (this.getCookie(cname)) {
            document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`
        }
    }
}

export default ngModule => ngModule.service('cookiesService', CookiesService)
