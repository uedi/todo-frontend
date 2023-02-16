import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

const LeaveGroup = ({ group, isOpen, close, leaveGroup }) => {
    const handleLeaveGroup = () => {
        leaveGroup(group.id)
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >   
            <DialogTitle>
                Leaving group
            </DialogTitle>
            <DialogContent>
                <Typography>Are you sure you want to leave group {group.name}?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button
                    color='error'
                    onClick={handleLeaveGroup}
                >
                    Leave
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LeaveGroup