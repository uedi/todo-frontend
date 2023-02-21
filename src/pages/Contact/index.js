import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'
import { Typography, Box, IconButton } from '@mui/material'
import QRCode from 'react-qr-code'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import EditIcon from '@mui/icons-material/Edit'
import RemoveContact from './RemoveContact'
import contactsService from '../../services/contacts'
import { showSuccess, showError } from '../../reducers/notificationReducer'
import { removeContact, updateContact } from '../../reducers/contactsReducer'
import EditContact from './EditContact'

const Contact = () => {
    const contacts = useSelector(state => state.contacts)
    const [removeOpen, setRemoveOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const contact = contacts && contacts.find(c => c.contactId.toString() === params.id)
    const color = contact?.color || '#ffffff'

    if(!contact) {
        return null
    }

    const handleRemoveContact = (id) => {
        setRemoveOpen(false)
        contactsService.remove(id)
        .then(() => {
            navigate('/contacts')
            dispatch(removeContact(id))
            dispatch(showSuccess('Contact removed'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    const handleUpdate = (id, data) => {
        setEditOpen(false)
        contactsService.update(id, data)
        .then(response => {
            dispatch(updateContact(response))
            dispatch(showSuccess('Contact updated'))
        })
        .catch(error => {
            console.log('error', error)
            dispatch(showError(error))
        })
    }

    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: color,
                        borderRadius: 2,
                        paddingRight: 2
                    }}
                >
                    <Typography variant='h5'
                        sx={{
                            margin: 2,
                            flex: 1
                        }}
                    >
                        {contact.name}
                    </Typography>
                    <IconButton
                        size='small'
                        onClick={() => setRemoveOpen(true)}
                    >
                        <PersonRemoveIcon />
                    </IconButton>
                    <Box width={20} />
                    <IconButton
                        size='small'
                        onClick={() => setEditOpen(true)}
                    >
                        <EditIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box
                marginTop={3}
            >
                { contact &&
                    <QRCode
                        value={contact.contactId}
                        size={150}
                    />
                }
            </Box>
            <RemoveContact
                isOpen={removeOpen}
                contact={contact}
                close={() => setRemoveOpen(false)}
                removeContact={handleRemoveContact}
            />
            <EditContact
                isOpen={editOpen}
                contact={contact}
                close={() => setEditOpen(false)}
                update={handleUpdate}
            />
        </>
    )
}

export default Contact