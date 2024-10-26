const KEY = 'SV5_AUTH_TOKEN'
const authenState = {
    set: (token: string) => localStorage.setItem(KEY, token),
    get: () => localStorage.getItem(KEY),
    remove: () => localStorage.removeItem(KEY)

}

export default authenState