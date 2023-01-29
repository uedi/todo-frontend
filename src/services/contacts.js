import axios from "axios"
import { header } from "../utils/auth"
const contactsApiUrl = '/api/contacts'

const getAll = async () => {
    const response = await axios.get(contactsApiUrl, header())
    return response.data
}

const create = async (data) => {
    const response = await axios.post(contactsApiUrl, data, header())
    return response.data
}

export default { getAll, create }