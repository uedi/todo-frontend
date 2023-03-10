import React from 'react'
import { Button, Box } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleIcon from '@mui/icons-material/People'
import { useNavigate } from 'react-router-dom'

const GroupInfo = ({ group, messageCount }) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 4,
            }}
        >
            <Button variant='outlined' startIcon={<ChatIcon />}
                onClick={() => navigate(`/groups/${group.id}/messages`)}
            >
                { messageCount }
            </Button>
            <Button variant='outlined' startIcon={<PeopleIcon />}
                onClick={() => navigate(`/groups/${group.id}/members`)}
            >
                {group.users ? group.users.length : 0}
            </Button>
        </Box>
    )
}

export default GroupInfo