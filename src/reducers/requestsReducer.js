const requestsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_REQUESTS':
            return action.data
        case 'SET_MEMBERSHIP_REQUESTS':
            return state ?
                { ...state, memberships: action.data}
                : { memberships: action.data}
        default:
            return state
    }
}

export const setMembershipRequests = (requests) => {
    return {
        type: 'SET_MEMBERSHIP_REQUESTS',
        data: requests
    }
}

export const setRequests = requests => {
    return {
        type: 'SET_REQUESTS',
        data: requests
    }
}

export default requestsReducer