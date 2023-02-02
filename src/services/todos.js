import axios from "axios"
import { header } from "../utils/auth"
const todosApiUrl = '/api/todos'

const create = async (data) => {
    const response = await axios.post(todosApiUrl, data, header())
    return response.data
}

const updateTodo = async (data) => {
    const response = await axios.put(todosApiUrl, data, header())
    return response.data
}

export default { create, updateTodo }