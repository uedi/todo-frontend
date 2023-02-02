const listsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_LISTS':
            return action.data
        case 'ADD_LIST':
            return state ? [...state, action.data] : [action.data]
        case 'ADD_TODO':
            const id = action.data.id
            return state.map(l => l.id !== id ? l 
                : l.todos ? {...l, todos: l.todos.push(action.data.todo)}
                : {...l, todos: [action.data.todo]})
        case 'UPDATE_TODO':
            const listId = action.data.id
            const listToUpdate = state.find(l => l.id === listId)
            if(!listToUpdate || !listToUpdate?.todos) {
                return state
            }
            const newTodos = listToUpdate.todos.map(t => t.id === action.data.todo.id ?
                action.data.todo : t)
            const newList = { ...listToUpdate, todos: newTodos}
            return state.map(l => l.id !== listId ? l
                : newList)
        default:
            return state
    }
}

export const setLists = lists => {
    return {
        type: 'SET_LISTS',
        data: lists
    }
}

export const addList = list => {
    return {
        type: 'ADD_LIST',
        data: list
    }
}

export const addTodoToList = (id, todo) => {
    return {
        type: 'ADD_TODO',
        data: {
            id: id,
            todo: todo
        }
    }
}

export const updateTodo = (id, todo) => {
    return {
        type: 'UPDATE_TODO',
        data: {
            id: id,
            todo: todo
        }
    }
}

export default listsReducer