const tokenReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return action.data
        default:
            return null
    }
}

export const setToken = token => {
    return {
        type: 'SET_TOKEN',
        data: token
    }
}

export const removeToken = () => {
    return {
        type: 'SET_TOKEN',
        data: null
    }
}

export default tokenReducer