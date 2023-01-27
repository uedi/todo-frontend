import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

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
                        padding: 1,
                        borderRadius: 5,
                        marginBottom: 2,
                        '&:hover': {
                            backgroundColor: '#f5f5f5'
                        },
                        height: 100
                    }}
                    >
                    <Typography>{group.name}</Typography>
                </Box>
            )}
        </>
    )
}

export default GroupList