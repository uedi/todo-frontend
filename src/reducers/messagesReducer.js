const messagesReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_MESSAGES':
            return action.data
        case 'SET_GROUP_MESSAGES': {
            const gms = {}
            gms[action.data.id] = action.data.messages
            return { ...state, ...gms }
        }
        case 'ADD_GROUP_MESSAGE': {
            const msgs = state[action.data.id] || []
            msgs.push(action.data.message)
            const g = {}
            g[action.data.id] = msgs
            return { ...state, ...g }
        }
        default:
            return state
    }
}

export const setMessages = (data) => {
    return {
        type: 'SET_MESSAGES',
        data: data
    }
}

export const setGroupMessages = (groupId, messages) => {
    return {
        type: 'SET_GROUP_MESSAGES',
        data: {
            id: groupId,
            messages: messages
        }
    }
}

export const addGroupMessage = (groupId, message) => {
    return {
        type: 'ADD_GROUP_MESSAGE',
        data: {
            id: groupId,
            message: message
        }
    }
}

export default messagesReducer