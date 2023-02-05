import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,
    Typography, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const AddContactList = ({ contacts, addClicked, memberIds }) => {
    if(!contacts) {
        return null
    }

    const AddContactRow = ({ contact }) => {
        if(memberIds.includes( contact.contactId)) {
            return null
        }
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 3,
                    marginBottom: 3
                }}
            >
                <Typography>{contact.name}</Typography>
                <Button variant='outlined'
                    onClick={() => addClicked(contact.contactId)}
                >
                    <AddIcon />
                </Button>
            </Box>
            
        )
    }

    return (
        <>
            { contacts.map(contact =>
                <Box key={contact.contactId}>
                    <AddContactRow contact={contact} />
                </Box>
            )}
        </>
    )
}

const AddMemberDialog = ({ isOpen, close, addMember, contacts, memberIds }) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >
            <DialogTitle>Add member</DialogTitle>
            <DialogContent>
                <AddContactList
                    contacts={contacts}
                    memberIds={memberIds}
                    addClicked={addMember}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddMemberDialog