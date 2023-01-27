import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

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
                <Box key={list.id}
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
                    <Typography>{list.name}</Typography>
                </Box>
            )}
        </>
    )
}

export default ListList