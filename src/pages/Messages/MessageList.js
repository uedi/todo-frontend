import React from 'react'
import { Box, Typography } from '@mui/material'
import { format } from 'date-fns'

const MessageList = ({ messages }) => {
    if(!messages) {
        return null
    }

    const DateInfo = ({ message }) => {
        const date = message.createdAt ? Date.parse(message.createdAt) : null
        return (
            <Typography>
                {date ? format(date, 'dd.MM.yyyy') : null}
            </Typography>
        )
    }

    return (
        <Box>
        {
            messages.map(message =>
                <Box key={message.id}
                    sx={{
                        backgroundColor: 'white',
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
                        <Typography
                            sx={{ flex: 1 }}
                        >{message.user?.name}</Typography>
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
        </Box>
    )
}

export default MessageList