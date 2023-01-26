import axios from 'axios'
const signupUrl = '/api/signup'
const loginUrl = '/api/login'

const signup = async (data) => {
    const response = await axios.post(signupUrl, data, { timeout: 10000 })
    return response.data
}

const login = async (credentials) => {
    const response = await axios.post(loginUrl, credentials, { timeout: 10000 })
    return response.data
}

export default { signup, login }