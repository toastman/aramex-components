class SilentRenew {
    constructor() {
        console.log('===SilentRenew')
        new Oidc.UserManager().signinSilentCallback();
    }
}

export default SilentRenew
