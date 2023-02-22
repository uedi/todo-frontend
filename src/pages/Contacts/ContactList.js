import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ItemContainer from '../../components/ItemContainer'

const ContactListItem = ({ contact, onClick }) => {
    const color = contact.color || '#ffffff'

    return (
        <ItemContainer
            onClick={onClick}
            color={color}
        >
            <Typography>{contact.name}</Typography>
        </ItemContainer>
    )
}

const ContactList = ({ contacts }) => {
    const navigate = useNavigate()

    if(!contacts) {
        return null
    }

    const handleClick = (id) => {
        navigate(id)
    }

    return (
        <>  
            { contacts.map(contact =>
                <ContactListItem
                    key={contact.contactId}
                    contact={contact}
                    onClick={() => handleClick(contact.contactId)}
                />
            )}
        </>
    )
}

export default ContactList