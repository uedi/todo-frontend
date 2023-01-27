import React from 'react'
import { Box, Typography, Checkbox } from '@mui/material'

const TodoList = ({ todos }) => {
    if(!todos) {
        return null
    }

    const handleChange = (id, newChecked) => {
        console.log(id, newChecked)
    }

    return (
        <Box
            sx={{ maxWidth: 'sm' }}
        >
        {
            todos.map(todo => 
                <Box key={todo.id}
                    sx={{
                        backgroundColor: 'white',
                        padding: 1,
                        paddingLeft: 2,
                        paddingRight: 2,
                        borderRadius: 2,
                        marginBottom: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        sx={{ flex: 1 }}
                    >{todo.name}</Typography>
                    <Checkbox checked={todo.done} onChange={
                        (event) => handleChange(todo.id, event.target.checked)
                    } />
                </Box>
            )
        }
        </Box>
    )
}

export default TodoList