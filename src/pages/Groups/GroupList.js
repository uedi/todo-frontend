import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import TodoStatus from '../../components/TodoStatus'
import PeopleIcon from '@mui/icons-material/People'

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
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography
                            sx={{ fontWeight: 'bold' }}
                        >{group.name}</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <PeopleIcon fontSize='small' />
                            <Typography
                                sx={{ marginLeft: 0.3, fontSize: 15 }}
                            >
                                {group.users ? group.users.length : 0}
                            </Typography>
                        </Box>
                    </Box>
                    
                    <TodoStatus todos={group.todos} />
                </Box>
            )}
        </>
    )
}

export default GroupList