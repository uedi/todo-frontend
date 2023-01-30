import React from 'react'
import { useSelector } from 'react-redux'
import ContactList from './ContactList'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    const navigate = useNavigate()

    if(!contacts) {
        return null
    }

    return (
        <Container maxWidth='lg'>
            <Button
                onClick={() => navigate('/contacts/new')}
            >
                Add new contact
            </Button>
            <h3>Contacts</h3>
            <ContactList contacts={contacts} />
        </Container>
    )
}

export default Contacts