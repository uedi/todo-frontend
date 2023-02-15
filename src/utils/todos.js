import { addDays } from 'date-fns'

const urgentTodos = (todos) => {
    const tomorrowDate = addDays(new Date(), 3)

    for (let todo of todos) {
        if(todo.end) {
            const endDate = new Date(todo.end)
            if(endDate < tomorrowDate && !todo.done) {
                return true
            }
        }
    }

    return false
}

export const listWithUrgentTodos = (list) => {
    if(!list?.todos || list.todos.length === 0) {
        return false
    }

    return urgentTodos(list.todos)
}

export const groupWithUrgentTodos = (group) => {
    if(!group?.todos || group.todos.length === 0) {
        return false
    }

    return urgentTodos(group.todos)
}