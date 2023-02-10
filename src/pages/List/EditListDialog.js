import React from 'react'
import { Dialog, Box, DialogContent, DialogActions, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import ColorPicker from '../../components/ColorPicker'

const EditListDialog = ({ isOpen, close, listName, setListName, changed,
    update, deleteList, color, setColor }) => {
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
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 3
                    }}
                >
                    <Typography fontSize={21}>Update list</Typography>
                    <Button
                        color='error'
                        onClick={deleteList}
                    >Delete list</Button>
                </Box>
                <TextField
                    sx={{ marginTop: 2, marginBottom: 5 }}
                    fullWidth
                    value={listName}
                    onChange={setListName}
                    label={'Name'}
                />
                <ColorPicker
                    color={color}
                    setColor={setColor}
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