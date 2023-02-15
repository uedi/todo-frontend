import { addDays } from 'date-fns'

export const listWithUrgentTodos = (list) => {
    if(!list?.todos || list.todos.length === 0) {
        return false
    }

    const tomorrowDate = addDays(new Date(), 3)

    for (let todo of list.todos) {
        if(todo.end) {
            const endDate = new Date(todo.end)
            if(endDate < tomorrowDate) {
                return true
            }
        }
    }
    return false
}