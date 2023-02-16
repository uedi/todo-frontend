import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'
import { Typography, Box, IconButton } from '@mui/material'
import QRCode from 'react-qr-code'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import RemoveContact from './RemoveContact'
import contactsService from '../../services/contacts'
import { showSuccess, showError } from '../../reducers/notificationReducer'
import { removeContact } from '../../reducers/contactsReducer'

const Contact = () => {
    const contacts = useSelector(state => state.contacts)
    const [removeOpen, setRemoveOpen] = useState(false)
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const contact = contacts && contacts.find(c => c.contactId.toString() === params.id)

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

    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant='h5'
                        sx={{
                            margin: 2,
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
        </>
        
    )
}

export default Contact