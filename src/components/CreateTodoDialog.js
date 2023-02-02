import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material'
import { TextField } from '@mui/material'
import DatePicker from './DatePicker'

const CreateTodoDialog = ({ open, handleClose, handleCreate, todoName, setTodoName,
    startDate, setStartDate, endDate, setEndDate
}) => {
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
                sx={{ marginTop: 2, marginBottom: 5 }}
                fullWidth
                value={todoName}
                onChange={setTodoName}
                label={'Name'}
            />
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between'}}
            >
                <DatePicker label={'Start date'} value={startDate} setValue={setStartDate} />
                <DatePicker label={'End date'} value={endDate} setValue={setEndDate} />
            </Box>
            
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