import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const ListListItem = ({ list, handleClick }) => {
    const todosCount = list.todos ? list.todos.length : 0
    const doneCount = list.todos ? list.todos.reduce((sum, cur) => sum + (cur.done ? 1 : 0), 0) : 0
    const progress = todosCount > 0 ? doneCount / todosCount * 100 : 0
    return (
        <Box
            onClick={() => handleClick(list.id)}
            sx={{
                backgroundColor: 'white',
                padding: 1,
                borderRadius: 5,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: '#f5f5f5'
                }
            }}
            >
            <Typography
                sx={{ fontWeight: 'bold' }}
            >{list.name}</Typography>
            <Typography>Done todos: {doneCount}/{todosCount}</Typography>
            <Typography>{Math.round(progress)} %</Typography>
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