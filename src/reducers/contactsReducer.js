const contactsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_CONTACTS':
            return action.data
        case 'ADD_CONTACT':
            return state ? [...state, action.data] : [action.data]
        case 'REMOVE_CONTACT':
            return state ?
                state.filter(c => c.contactId !== action.data)
                : state
        case 'UPDATE_CONTACT':
            return state ?
                state.map(c => c.contactId === action.data.contactId ? action.data : c)
                : [action.data]
        default:
            return state
    }
}

export const setContacts = contacts => {
    return {
        type: 'SET_CONTACTS',
        data: contacts
    }
}

export const addContact = contact => {
    return {
        type: 'ADD_CONTACT',
        data: contact
    }
}

export const removeContact = id => {
    return {
        type: 'REMOVE_CONTACT',
        data: id
    }
}

export const updateContact = contact => {
    return {
        type: 'UPDATE_CONTACT',
        data: contact
    }
}

export default contactsReducer