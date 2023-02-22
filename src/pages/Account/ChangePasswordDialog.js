import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import { TextField } from '@mui/material'

const ChangePasswordDialog = ({ open, handleClose, changePassword,
    oldPassword, setOldPassword, newPassword, setNewPassword
}) => {
    const disabled = oldPassword === '' || newPassword === ''

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Change password</DialogTitle>
            <DialogContent>
                <TextField
                    sx={{ marginTop: 2, marginBottom: 5 }}
                    fullWidth
                    value={oldPassword}
                    onChange={setOldPassword}
                    label='Old password'
                    type='password'
                />
                <TextField
                    sx={{ marginTop: 2, marginBottom: 5 }}
                    fullWidth
                    value={newPassword}
                    onChange={setNewPassword}
                    label='New password'
                    type='password'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button
                    disabled={disabled}
                    onClick={changePassword}
                >
                    Change
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChangePasswordDialog