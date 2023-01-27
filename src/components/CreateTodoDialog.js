import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import { TextField } from '@mui/material'

const CreateTodoDialog = ({ open, handleClose, handleCreate, todoName, setTodoName }) => {

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Create new todo</DialogTitle>
            <DialogContent>
            <TextField
                sx={{ marginTop: 2 }}
                fullWidth
                value={todoName}
                onChange={setTodoName}
                label={'Name'}
            />
                
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button
                    disabled={!todoName || todoName === ''}
                    onClick={handleCreate}
                >
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateTodoDialog