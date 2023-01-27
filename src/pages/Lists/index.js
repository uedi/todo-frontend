import React from 'react'
import { useSelector } from 'react-redux'
import ListList from './ListList'
import { Container } from '@mui/material'

const Lists = () => {
    const lists = useSelector(state => state.lists)

    return (
        <Container maxWidth='lg'>
            <h3>Lists</h3>
            <ListList lists={lists} />
        </Container>
    )
}

export default Lists