import axios from "axios"
import { header } from "../utils/auth"
const groupsApiUrl = '/api/groups'
const messagesApiUrl = '/api/messages'

const getGroupMessages = async (id) => {
    const response = await axios.get(`${groupsApiUrl}/${id}/messages`, header())
    return response.data
}

const sendMessage = async (data) => {
    const response = await axios.post(messagesApiUrl, data, header())
    return response.data
}

export default { getGroupMessages, sendMessage }