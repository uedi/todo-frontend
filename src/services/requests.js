import axios from "axios"
import { header } from "../utils/auth"
const requestsApiUrl = '/api/requests'

const getAll = async () => {
    const response = await axios.get(requestsApiUrl, header())
    return response.data
}

export default { getAll }