const tokenReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.data }
        default:
            return state
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