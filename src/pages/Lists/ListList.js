import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import TodoStatus from '../../components/TodoStatus'
import ItemContainer from '../../components/ItemContainer'

const ListListItem = ({ list, handleClick }) => {
    const color = list.color || '#ffffff'

    return (
        <ItemContainer
            color={color}
            onClick={() => handleClick(list.id)}
        >
            <>
                <Typography
                    sx={{ fontWeight: 'bold' }}
                >
                    {list.name}
                </Typography>
                <TodoStatus todos={list.todos} />
            </>
        </ItemContainer>
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