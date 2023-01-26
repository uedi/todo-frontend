import axios from "axios"
import { header } from "../utils/auth"
const groupsApiUrl = '/api/groups'

const getAll = async () => {
    const response = await axios.get(groupsApiUrl, header())
    return response.data
}

const create = async (data) => {
    const response = await axios.post(groupsApiUrl, data, header())
    return response.data
}

export default { getAll, create }