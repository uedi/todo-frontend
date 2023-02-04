import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const Messages = () => {
    const messages = useSelector(state => state.messages)
    const groups = useSelector(state => state.groups)
    const params = useParams()
    const groupId = params.id
    const groupMessages = messages[groupId] || []
    const group = groups && groups.find(g => g.id.toString() === groupId)

    return (
        <>
            <Typography variant='h5' sx={{ margin: 2 }}>Messages ({group.name})</Typography>
            <MessageInput groupId={groupId} />
            <MessageList messages={groupMessages} />
        </>
    )
}

export default Messages