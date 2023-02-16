import React from 'react'
import { Dialog, DialogContent, DialogActions, Button,
    Typography, Box } from '@mui/material'
import QRCode from 'react-qr-code'

const ContactInfo = ({ isOpen, close, contact, removeContact,
        showRemove = false, removeText = 'Remove contact', myId }) => {
    const username = contact?.username ? contact.username : null
    const isMe = myId === contact?.id

    const handleRemove = () => {
        removeContact(contact.id)
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >
            <DialogContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 1
                    }}
                >
                    <Typography variant='h6'>{contact?.name || ''}</Typography>
                    { showRemove && !isMe &&
                        <Button
                            color='error'
                            onClick={handleRemove}
                        >
                            { removeText }
                        </Button>
                    }
                </Box>
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