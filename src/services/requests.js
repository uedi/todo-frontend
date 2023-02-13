import axios from "axios"
import { header } from "../utils/auth"
const requestsApiUrl = '/api/requests'

const getAll = async () => {
    const response = await axios.get(requestsApiUrl, header())
    return response.data
}

const replyMembership = async (data) => {
    const response = await axios.post(`${requestsApiUrl}/membership`, data, header())
    return response.data
}

export default { getAll, replyMembership }