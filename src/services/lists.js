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

const update = async (id, data) => {
    const response = await axios.put(`${listsApiUrl}/${id}`, data, header())
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${listsApiUrl}/${id}`, header())
    return response.data
}

export default { getAll, create, update, remove }