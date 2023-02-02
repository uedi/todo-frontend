import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import TodoStatus from '../../components/TodoStatus'

const GroupList = ({ groups }) => {
    const navigate = useNavigate()

    if(!groups) {
        return null
    }

    const handleClick = (id) => {
        navigate(id)
    }

    return (
        <>  
            { groups.map(group =>
                <Box key={group.id}
                    onClick={() => handleClick(group.id)}
                    sx={{
                        backgroundColor: 'white',
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
                    >{group.name}</Typography>
                    <TodoStatus todos={group.todos} />
                </Box>
            )}
        </>
    )
}

export default GroupList