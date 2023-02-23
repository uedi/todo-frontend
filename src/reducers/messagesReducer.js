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
            const newMsgs = [action.data.message, ...msgs]
            const g = {}
            g[action.data.id] = newMsgs
            return { ...state, ...g }
        }
        case 'REMOVE_GROUP_MESSAGE': {
            if(!(action.data.groupId) in state) {
                return state
            }
            const gs = {}
            const oldmsgs = state[action.data.groupId]
            const newmsgs = oldmsgs.filter(m => m.id !== action.data.messageId)
            gs[action.data.groupId] = newmsgs
            return { ...state, ...gs }
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

export const removeGroupMessage = (groupId, messageId) => {
    return {
        type: 'REMOVE_GROUP_MESSAGE',
        data: {
            groupId: groupId,
            messageId: messageId
        }
    }
}

export default messagesReducer