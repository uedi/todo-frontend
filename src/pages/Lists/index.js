import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ListList from './ListList'
import { Container } from '@mui/material'
import { Button } from '@mui/material'

const Lists = () => {
    const lists = useSelector(state => state.lists)
    const navigate = useNavigate()

    return (
        <Container maxWidth='lg'>
            <Button
                onClick={() => navigate('/lists/new')}
            >
                Create new list
            </Button>
            <h3>Lists</h3>
            <ListList lists={lists} />
        </Container>
    )
}

export default Lists