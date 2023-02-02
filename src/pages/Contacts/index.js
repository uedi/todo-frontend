import React from 'react'
import { useSelector } from 'react-redux'
import ContactList from './ContactList'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    const navigate = useNavigate()

    if(!contacts) {
        return null
    }

    return (
        <>
            <Button
                onClick={() => navigate('/contacts/new')}
            >
                Add new contact
            </Button>
            <Typography variant='h5' sx={{ margin: 2 }}>Contacts</Typography>
            <ContactList contacts={contacts} />
        </>
    )
}

export default Contacts