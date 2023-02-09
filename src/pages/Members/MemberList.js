import React from 'react'
import { Box, Typography } from '@mui/material'

const MemberList = ({ members, memberClicked }) => {

    if(!members) {
        return null
    }

    return (
        <>  
            { members.map(member =>
                <Box key={member.id}
                    onClick={() => memberClicked(member)}
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
                    <Typography>{member.name}</Typography>
                </Box>
            )}
        </>
    )
}

export default MemberList