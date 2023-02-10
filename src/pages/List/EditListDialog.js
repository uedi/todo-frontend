import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material'
import { TextField } from '@mui/material'

const EditListDialog = ({ isOpen, close, listName, setListName, changed,
    update }) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >
            <DialogTitle>Update list</DialogTitle>
            <DialogContent>
                <TextField
                    sx={{ marginTop: 2, marginBottom: 5 }}
                    fullWidth
                    value={listName}
                    onChange={setListName}
                    label={'Name'}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Close</Button>
                <Button
                    disabled={!changed}
                    onClick={update}
                >
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditListDialog