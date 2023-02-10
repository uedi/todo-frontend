import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import TodoStatus from '../../components/TodoStatus'

const ListListItem = ({ list, handleClick }) => {
    return (
        <Box
            onClick={() => handleClick(list.id)}
            sx={{
                backgroundColor: `${list.color || 'white'}`,
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: '#f5f5f5'
                }
            }}
            >
            <Typography
                sx={{ fontWeight: 'bold' }}
            >{list.name}</Typography>
            <TodoStatus todos={list.todos} />
        </Box>
    )
}

const ListList = ({ lists }) => {
    const navigate = useNavigate()

    if(!lists) {
        return null
    }

    const handleClick = (id) => {
        navigate(id)
    }

    return (
        <>  
            { lists.map(list =>
                <ListListItem
                    key={list.id}
                    list={list}
                    handleClick={handleClick}
                />
            )}
        </>
    )
}

export default ListList