class PopupSignup {
    constructor() {
        console.log('PopupSignup=========')
        new Oidc.UserManager().signinPopupCallback()
    }
}

export default PopupSignup
