import axios from "axios"
import { header } from "../utils/auth"
const groupsApiUrl = '/api/groups'

const getGroupMessages = async (id) => {
    const response = await axios.get(`${groupsApiUrl}/${id}/messages`, header())
    return response.data
}

export default { getGroupMessages }