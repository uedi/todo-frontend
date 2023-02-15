import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import TodoStatus from '../../components/TodoStatus'
import { LightenDarkenColor } from 'lighten-darken-color'

const ListListItem = ({ list, handleClick }) => {
    const color = list.color || '#ffffff'
    const darkerColor = LightenDarkenColor(list.color, -10)

    return (
        <Box
            onClick={() => handleClick(list.id)}
            sx={{
                backgroundColor: color,
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: darkerColor
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
        navigate(`/lists/${id}`)
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