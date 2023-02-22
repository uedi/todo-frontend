import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField } from '@mui/material'

const EditNameDialog = ({ open, handleClose, changeName,
    saveEnabled, newName, setNewName
}) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Edit name</DialogTitle>
            <DialogContent>
                <TextField
                    sx={{ marginTop: 2, marginBottom: 5 }}
                    fullWidth
                    value={newName}
                    onChange={setNewName}
                    label='Name'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    disabled={!saveEnabled}
                    onClick={changeName}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditNameDialog