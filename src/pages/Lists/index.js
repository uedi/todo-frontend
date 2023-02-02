import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ListList from './ListList'
import { Button, Typography } from '@mui/material'

const Lists = () => {
    const lists = useSelector(state => state.lists)
    const navigate = useNavigate()

    return (
        <>
            <Button
                onClick={() => navigate('/lists/new')}
            >
                Create new list
            </Button>
            <Typography variant='h5' sx={{ margin: 2 }}>Lists</Typography>
            <ListList lists={lists} />
        </>
    )
}

export default Lists