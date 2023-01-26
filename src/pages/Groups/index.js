import React from 'react'
import { useSelector } from 'react-redux'
import GroupList from './GroupList'
import { Container } from '@mui/material'

const Groups = () => {
    const groups = useSelector(state => state.groups)

    return (
        <Container maxWidth='lg'>
            <h3>Groups</h3>
            <GroupList groups={groups} />
        </Container>
    )
}

export default Groups