import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,
    Typography, Box } from '@mui/material'
import QRCode from 'react-qr-code'

const ContactInfo = ({ isOpen, close, contact }) => {
    const username = contact?.username ? contact.username : null
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >
            <DialogTitle>{contact?.name || ''}</DialogTitle>
            <DialogContent>
                <Typography>{username ? `Username: ${username}` : ''}</Typography>
                <Box
                    marginTop={3}
                >
                    { contact &&
                        <QRCode
                            value={contact.id}
                            size={150}
                        />
                    }
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ContactInfo