import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { LightenDarkenColor } from 'lighten-darken-color'

const ContactListItem = ({ contact, onClick }) => {
    const color = contact.color || '#ffffff'
    const darkerColor = LightenDarkenColor(color, -10)

    return (
        <Box
            onClick={onClick}
            sx={{
                backgroundColor: color,
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: darkerColor
                }
            }}
        >
            <Typography>{contact.name}</Typography>
        </Box>
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