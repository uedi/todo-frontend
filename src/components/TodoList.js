import React from 'react'
import { Box, Typography, Checkbox } from '@mui/material'
import { format } from 'date-fns'

const DateInfo = ({ todo }) => {
    const startDate = todo.start ? Date.parse(todo.start) : null
    const endDate = todo.end ? Date.parse(todo.end) : null

    if(!(startDate || endDate)) {
        return null
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Typography>{startDate ? `Start ${format(startDate, 'dd.MM.yyyy')}` : ''}</Typography>
            <Typography>{endDate ? `Deadline ${format(endDate, 'dd.MM.yyyy')}` : ''}</Typography>
        </Box>
    )
}

const TodoList = ({ todos, updateTodo }) => {
    if(!todos) {
        return null
    }

    const handleChange = (id, newChecked) => {
        updateTodo({
            id: id,
            done: newChecked
        })
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
                        flexDirection: 'column'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{ flex: 1, fontWeight: '600' }}
                        >{todo.name}</Typography>
                        <Checkbox checked={todo.done} onChange={
                            (event) => handleChange(todo.id, event.target.checked)
                        } />
                    </Box>
                    <DateInfo todo={todo} />
                </Box>
            )
        }
        </Box>
    )
}

export default TodoList