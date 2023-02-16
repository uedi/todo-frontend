import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

const RemoveContact = ({ contact, isOpen, close, removeContact }) => {
    const handleRemove = () => {
        removeContact(contact.contactId)
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >   
            <DialogTitle>
                Remove contact
            </DialogTitle>
            <DialogContent>
                <Typography>Are you sure you want to remove {contact.name} from your contacts?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button
                    color='error'
                    onClick={handleRemove}
                >
                    Remove
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default RemoveContact