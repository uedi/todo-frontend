import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material'
import ColorPicker from '../../components/ColorPicker'

const EditContact = ({ contact, isOpen, close, update }) => {
    const [color, setColor] = useState('')
    const colorChanged = contact.color !== color && color !== ''

    useEffect(() => {
        if(contact) {
            if(contact.color) {
                setColor(contact.color)
            }
        }
    }, [contact])

    const handleUpdate = () => {
        update(contact.contactId, {
            color: color
        })
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={isOpen}
            onClose={close}
        >   
            <DialogTitle>
                Update contact
            </DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        marginTop: 2,
                        marginBottom: 3
                    }}
                >
                    <ColorPicker
                        color={color}
                        setColor={setColor}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Close</Button>
                <Button
                    disabled={!colorChanged}
                    onClick={handleUpdate}
                >
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditContact