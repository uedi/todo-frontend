import React from 'react'
import { useSelector } from 'react-redux'
import ContactList from './ContactList'
import { Container } from '@mui/material'

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    console.log(contacts)
    if(!contacts) {
        return null
    }

    return (
        <Container maxWidth='lg'>
            <h3>Contacts</h3>
            <ContactList contacts={contacts} />
        </Container>
    )
}

export default Contacts