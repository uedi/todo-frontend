const requestsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_REQUESTS':
            return action.data
        default:
            return state
    }
}

export const setRequests = requests => {
    return {
        type: 'SET_REQUESTS',
        data: requests
    }
}

export default requestsReducer