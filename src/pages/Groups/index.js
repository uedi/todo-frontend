import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GroupList from './GroupList'
import { Button, Typography } from '@mui/material'

const Groups = () => {
    const groups = useSelector(state => state.groups)
    const navigate = useNavigate()

    return (
        <>
            <Button
                onClick={() => navigate('/groups/new')}
            >
                Create new group
            </Button>
            <Typography variant='h5' sx={{ margin: 2 }}>Groups</Typography>
            <GroupList groups={groups} />
        </>
    )
}

export default Groups