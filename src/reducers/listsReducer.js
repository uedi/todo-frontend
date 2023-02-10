const listsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_LISTS':
            return action.data
        case 'ADD_LIST':
            return state ? [...state, action.data] : [action.data]
        case 'UPDATE_LIST':
            return state ?
                state.map(l => l.id === action.data.id ? action.data : l)
                : [action.data]
        case 'DELETE_LIST':
            return state ?
                state.filter(l => l.id !== action.data)
                : state
        case 'ADD_TODO':
            const id = action.data.id
            const lToUpdate = state.find(l => l.id === id)
            if(!lToUpdate) {
                return state
            }
            if(!lToUpdate.todos) {
                lToUpdate.todos = []
            }
            lToUpdate.todos.push(action.data.todo)
            return state.map(l => l.id !== id ? l : lToUpdate)
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
        case 'DELETE_TODO': {
            const l = state.find(list => list.id === action.data.listId)
            if(!l || !l.todos) {
                return state
            }
            const newTs = l.todos.filter(t => t.id !== action.data.todoId)
            const newL = { ...l, todos: newTs }
            return state.map(list => list.id !== l.id ? list : newL)
        }
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

export const updateList = list => {
    return {
        type: 'UPDATE_LIST',
        data: list
    }
}

export const deleteList = id => {
    return {
        type: 'DELETE_LIST',
        data: id
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

export const deleteTodo = (listId, todoId) => {
    return {
        type: 'DELETE_TODO',
        data: {
            listId: listId,
            todoId: todoId
        }
    }
}

export default listsReducer