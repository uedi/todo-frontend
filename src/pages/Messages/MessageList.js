import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, IconButton } from '@mui/material'
import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete'

const DateInfo = ({ message }) => {
    const date = message.createdAt ? Date.parse(message.createdAt) : null
    return (
        <Typography>
            {date ? format(date, 'dd.MM.yyyy') : null}
        </Typography>
    )
}

const MessageListItem = ({ message, userId, deleteMessage }) => {
    const myMessage = userId && userId === message.user?.id

    return (
        <Box
            sx={{
                backgroundColor: myMessage ? '#b3e5fc' : 'white',
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography sx={{ flex: 1 }}>{message.user?.name}</Typography>
                {myMessage &&
                <IconButton
                    size='small'
                    onClick={() => deleteMessage(message.id)}
                    sx={{
                        marginRight: 1,
                        marginLeft: 1
                    }}
                >
                    <DeleteIcon color='gray' />
                </IconButton>
                }
                <DateInfo message={message} />
            </Box>
            <Box
                sx={{
                    marginTop: 2
                }}
            >
                <Typography>
                    {message.message}
                </Typography>
            </Box>
            
        </Box>
    )
}

const MessageList = ({ messages, deleteMessage }) => {
    const user = useSelector(state => state.user)
    const userId = user?.user.id

    if(!messages) {
        return null
    }

    return (
        <Box>
        {
            messages.map(message =>
                <MessageListItem
                    key={message.id}
                    message={message}
                    userId={userId}
                    deleteMessage={deleteMessage}
                />
            )
        }
        </Box>
    )
}

export default MessageList