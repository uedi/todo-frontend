import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import messagesService from '../../services/messages'
import { showError } from '../../reducers/notificationReducer'
import { removeGroupMessage } from '../../reducers/messagesReducer'

const Messages = () => {
    const messages = useSelector(state => state.messages)
    const groups = useSelector(state => state.groups)
    const params = useParams()
    const dispatch = useDispatch()
    const groupId = params.id
    const groupMessages = messages[groupId] || []
    const group = groups && groups.find(g => g.id.toString() === groupId)

    const handleDeleteMessage = (id) => {
        messagesService.deleteMessage(id)
        .then(() => {
            dispatch(removeGroupMessage(groupId, id))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <>
            <Typography variant='h5' sx={{ margin: 2 }}>Messages ({group?.name})</Typography>
            <MessageInput groupId={groupId} />
            <MessageList
                messages={groupMessages}
                deleteMessage={handleDeleteMessage}
            />
        </>
    )
}

export default Messages