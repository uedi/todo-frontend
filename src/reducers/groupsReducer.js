const groupsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_GROUPS':
            return action.data
        case 'ADD_GROUP':
            return state ? [...state, action.data] : [action.data]
        case 'ADD_TODO':
            const id = action.data.id
            const gToUpdate = state.find(g => g.id === id)
            if(!gToUpdate) {
                return state
            }
            if(!gToUpdate.todos) {
                gToUpdate.todos = []
            }
            gToUpdate.todos.push(action.data.todo)
            return state.map(g => g.id !== id ? g : gToUpdate)
        case 'UPDATE_TODO':
            const groupId = action.data.id
            const groupToUpdate = state.find(g => g.id === groupId)
            if(!groupToUpdate || !groupToUpdate?.todos) {
                return state
            }
            const newTodos = groupToUpdate.todos.map(t => t.id === action.data.todo.id ?
                action.data.todo : t)
            const newGroup = { ...groupToUpdate, todos: newTodos}
            return state.map(g => g.id !== groupId ? g
                : newGroup)
        default:
            return state
    }
}

export const setGroups = groups => {
    return {
        type: 'SET_GROUPS',
        data: groups
    }
}

export const addGroup = group => {
    return {
        type: 'ADD_GROUP',
        data: group
    }
}

export const addTodoToGroup = (id, todo) => {
    return {
        type: 'ADD_TODO',
        data: {
            id: id,
            todo: todo
        }
    }
}

export const updateGroupTodo = (id, todo) => {
    return {
        type: 'UPDATE_TODO',
        data: {
            id: id,
            todo: todo
        }
    }
}

export default groupsReducer