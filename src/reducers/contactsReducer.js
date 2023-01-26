const contactsReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_CONTACTS':
            return action.data
        case 'ADD_CONTACT':
            return state ? [...state, action.data] : [action.data]
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

export default contactsReducer