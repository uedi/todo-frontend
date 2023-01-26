const groupsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_GROUPS':
            return action.data
        case 'ADD_GROUP':
            return state ? [...state, action.data] : [action.data]
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

export default groupsReducer