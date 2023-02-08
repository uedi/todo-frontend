import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Box } from '@mui/material'
import QRCode from 'react-qr-code'

const Account = () => {
    const user = useSelector(state => state.user)
    
    return (
        <>
            <Typography variant='h5' sx={{ margin: 2 }}>Account</Typography>
            <Typography>Name: {user?.user?.name}</Typography>
            <Typography
                sx={{ marginTop: 2 }}
            >Username: {user?.user?.username}</Typography>
            <Box
                marginTop={3}
            >
                <QRCode
                    value={user?.user.id}
                    size={150}
                />
            </Box>
        </>
    )
}

export default Account