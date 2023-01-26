const listsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_LISTS':
            return action.data
        case 'ADD_LIST':
            return state ? [...state, action.data] : [action.data]
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

export default listsReducer