import React from 'react'
import { Button, Box } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleIcon from '@mui/icons-material/People'

const GroupInfo = ({ group, messageCount }) => {
    return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 2,
            paddingBottom: 1
        }}
    >
        <Button variant='outlined' startIcon={<ChatIcon />}>
            { messageCount }
        </Button>
        <Button variant='outlined' startIcon={<PeopleIcon />}>
            {group.users ? group.users.length : 0}
        </Button>
    </Box>
    )
}

export default GroupInfo