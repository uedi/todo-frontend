import React from 'react'
import { Button, Box } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleIcon from '@mui/icons-material/People'

const GroupInfo = () => {
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
            0
        </Button>
        <Button variant='outlined' startIcon={<PeopleIcon />}>
            0
        </Button>
    </Box>
    )
}

export default GroupInfo