import React from 'react'
import { Box, Typography } from '@mui/material'

const ContactList = ({ contacts }) => {

    if(!contacts) {
        return null
    }

    const handleClick = (id) => {
        console.log(id)
    }

    return (
        <>  
            { contacts.map(contact =>
                <Box key={contact.contactId}
                    onClick={() => handleClick(contact.contactId)}
                    sx={{
                        backgroundColor: 'white',
                        padding: 1,
                        borderRadius: 5,
                        marginBottom: 2,
                        '&:hover': {
                            backgroundColor: '#f5f5f5'
                        }
                    }}
                    >
                    <Typography>{contact.name}</Typography>
                </Box>
            )}
        </>
    )
}

export default ContactList