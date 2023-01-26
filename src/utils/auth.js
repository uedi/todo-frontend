let token = null

export const setAuthToken = newToken => {
    token = `bearer ${newToken}`
}

export const header = () => {
    return { headers: { Authorization: token } }
}
