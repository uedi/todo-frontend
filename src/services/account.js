import axios from 'axios'
import { header } from "../utils/auth"
const signupUrl = '/api/signup'
const loginUrl = '/api/login'
const accountUrl = '/api/account'

const signup = async (data) => {
    const response = await axios.post(signupUrl, data, { timeout: 10000 })
    return response.data
}

const login = async (credentials) => {
    const response = await axios.post(loginUrl, credentials, { timeout: 10000 })
    return response.data
}

const changePassword = async (data) => {
    const response = await axios.put(`${accountUrl}/password`, data, header())
    return response.data
}

export default { signup, login, changePassword }