import React from 'react'
import { Box, Typography } from '@mui/material'

const GroupTable = ({ groups }) => {
    if(!groups) {
        return null
    }

    const handleClick = (g) => {
        console.log(g.name)
    }

    return (
        <>  
            { groups.map(group =>
                <Box key={group.id}
                    onClick={() => handleClick(group)}
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

export default GroupTable