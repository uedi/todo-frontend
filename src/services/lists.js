import axios from "axios"
import { header } from "../utils/auth"
const listsApiUrl = '/api/lists'

const getAll = async () => {
    const response = await axios.get(listsApiUrl, header())
    return response.data
}

const create = async (data) => {
    const response = await axios.post(listsApiUrl, data, header())
    return response.data
}

export default { getAll, create }