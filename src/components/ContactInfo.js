import React from 'react'
import { Dialog, DialogContent, DialogActions, Button,
    Typography, Box } from '@mui/material'
import QRCode from 'react-qr-code'

const ContactInfo = ({ isOpen, close, contact, removeContact, contactIds,
        showRemove = false, removeText = 'Remove contact', myId,
        addContact }) => {
    const username = contact?.username ? contact.username : null
    const isMe = myId === contact?.id
    const isContact = contactIds && contact && contactIds.includes(contact?.id)

    const handleRemove = () => {
        removeContact(contact.id)
    }

    const handleAddContact = () => {
        addContact(contact.username)
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
                { !isMe && contactIds && !isContact &&
                <Button
                    onClick={handleAddContact}
                >
                    Add to contacts
                </Button>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ContactInfo