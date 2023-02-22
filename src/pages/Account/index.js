import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box, Button } from '@mui/material'
import QRCode from 'react-qr-code'
import ChangePassword from './ChangePassword'
import accountService from '../../services/account'
import { showSuccess, showError } from '../../reducers/notificationReducer'

const Account = () => {
    const [changePasswordOpen, setChangePasswordOpen] = useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleChangePassword = (data) => {
        setChangePasswordOpen(false)
        accountService.changePassword(data)
        .then(() => {
            dispatch(showSuccess('Password changed'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant='h5' sx={{ margin: 2 }}>Account</Typography>
                <Button
                    onClick={() => setChangePasswordOpen(true)}
                >
                    Change password
                </Button>
            </Box>
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
            <ChangePassword
                isOpen={changePasswordOpen}
                close={() => setChangePasswordOpen(false)}
                changePassword={handleChangePassword}
            />
        </>
    )
}

export default Account