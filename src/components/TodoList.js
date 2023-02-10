import React from 'react'
import { Box, Typography, Checkbox, IconButton, Button } from '@mui/material'
import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete'

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

const TodoList = ({ todos, updateTodo, deleteTodo, showDelete, todoClicked, color }) => {
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
        <Box>
        {
            todos.map(todo =>
                <Box key={todo.id}
                    sx={{
                        backgroundColor: color || 'white',
                        padding: 2,
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
                        <Box sx={{ flex: 1}}>
                            <Button
                                onClick={() => todoClicked(todo)}
                                sx={{
                                    textTransform: 'unset'
                                }}
                            >
                                <Typography
                                    sx={{
                                        flex: 1,
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}
                                >{todo.name}</Typography>
                            </Button>
                        </Box>
                        <Checkbox checked={todo.done} onChange={
                            (event) => handleChange(todo.id, event.target.checked)
                        } />
                        {showDelete &&
                        <IconButton
                            size='small'
                            color='error'
                            onClick={() => deleteTodo(todo.id)}
                        >
                            <DeleteIcon color='red' />
                        </IconButton>
                        }
                    </Box>
                    <DateInfo todo={todo} />
                </Box>
            )
        }
        </Box>
    )
}

export default TodoList