import React from 'react'
import { Box, Typography } from '@mui/material'

const ListList = ({ lists }) => {
    if(!lists) {
        return null
    }

    const handleClick = (l) => {
        console.log(l.name)
    }

    return (
        <>  
            { lists.map(list =>
                <Box key={list.id}
                    onClick={() => handleClick(list)}
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