import React from 'react'
import { Box, Typography } from '@mui/material'
import AcceptButton from './AcceptButton'
import RejectButton from './RejectButton'

const MembershipRequestItem = ({ request, accept, reject }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                marginTop: 2
            }}
        >
            <Typography>Group: {request.group?.name}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}
            >
                <RejectButton onClick={reject} />
                <Box width={30} />
                <AcceptButton onClick={accept} />
            </Box>
        </Box>
    )
}

export default MembershipRequestItem