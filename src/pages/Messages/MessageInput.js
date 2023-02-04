import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, TextField, Button } from '@mui/material'
import { addGroupMessage } from '../../reducers/messagesReducer'
import messagesService from '../../services/messages'

const MessageInput = ({ groupId }) => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const sendMessage = () => {
        const messageToSend = {
            groupId: groupId,
            message: message
        }
        setMessage('')
        messagesService.sendMessage(messageToSend)
        .then(response => {
            dispatch(addGroupMessage(groupId, response))
        })
        .catch(error => {
            console.log('error in send message', error)
        })
    }

    return (
        <Box
            sx={{
                paddingTop: 2,
                paddingBottom: 4,
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <TextField
                value={message}
                onChange={event => setMessage(event.target.value)}
                label='Message'
                fullWidth
            />
            <Button
                onClick={sendMessage}
                variant='contained'
                disabled={message === ''}
                sx={{
                    marginLeft: 3
                }}
            >
                Send
            </Button>
        </Box>
    )
}

export default MessageInput