import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography, Box } from '@mui/material'
import QRCode from 'react-qr-code'

const Contact = () => {
    const contacts = useSelector(state => state.contacts)
    const params = useParams()

    const contact = contacts && contacts.find(c => c.contactId.toString() === params.id)

    if(!contact) {
        return null
    }

    return (
        <>
            <Typography variant='h5'
                sx={{
                    margin: 2,
                }}
            >
                {contact.name}
            </Typography>
            <Box
                marginTop={3}
            >
                { contact &&
                    <QRCode
                        value={contact.contactId}
                        size={150}
                    />
                }
            </Box>
        </>
        
    )
}

export default Contact