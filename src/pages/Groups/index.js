import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GroupList from './GroupList'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

const Groups = () => {
    const groups = useSelector(state => state.groups)
    const navigate = useNavigate()

    return (
        <Container maxWidth='lg'>
            <Button
                onClick={() => navigate('/groups/new')}
            >
                Create new group
            </Button>
            <h3>Groups</h3>
            <GroupList groups={groups} />
        </Container>
    )
}

export default Groups