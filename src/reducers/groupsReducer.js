const groupsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_GROUPS':
            return action.data
        case 'ADD_GROUP':
            return state ? [...state, action.data] : [action.data]
        case 'UPDATE_GROUP':
            return state ?
                state.map(g => g.id === action.data.id ? action.data : g)
                : [action.data]
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
        case 'SET_MEMBERS':
            const gid = action.data.id
            const g =  state.find(gg => gg.id === gid)
            if(!g) {
                return state
            }
            const newG = { ...g, users: action.data.users }
            return state.map(gg => gg.id !== gid ? gg : newG)
        case 'DELETE_TODO':
            const gg = state.find(g => g.id === action.data.groupId)
            if(!gg || !gg.todos) {
                return state
            }
            const ggNewTodos = gg.todos.filter(t => t.id !== action.data.todoId)
            const newGg = { ...gg, todos: ggNewTodos}
            return state.map(g => g.id !== gg.id ? g : newGg)
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

export const updateGroup = group => {
    return {
        type: 'UPDATE_GROUP',
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

export const setMembers = (id, users) => {
    return {
        type: 'SET_MEMBERS',
        data: {
            id: id,
            users: users
        }
    }
}

export const deleteGroupTodo = (groupId, todoId) => {
    return {
        type: 'DELETE_TODO',
        data: {
            groupId: groupId,
            todoId: todoId
        }
    }
}

export default groupsReducer