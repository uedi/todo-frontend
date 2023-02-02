import React from 'react'
import { Box, Typography } from '@mui/material'

const TodoStatus = ({ todos }) => {
    const todosCount = todos ? todos.length : 0
    const doneCount = todos ? todos.reduce((sum, cur) => sum + (cur.done ? 1 : 0), 0) : 0
    const progress = todosCount > 0 ? doneCount / todosCount * 100 : 0

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Typography>Done todos: {doneCount}/{todosCount}</Typography>
            <Typography>{Math.round(progress)} %</Typography>
        </Box>
    )
}

export default TodoStatus