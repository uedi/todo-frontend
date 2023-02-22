import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box, Button, IconButton } from '@mui/material'
import QRCode from 'react-qr-code'
import ChangePassword from './ChangePassword'
import accountService from '../../services/account'
import { showSuccess, showError } from '../../reducers/notificationReducer'
import { setUser } from '../../reducers/userReducer'
import EditName from './EditName'
import EditIcon from '@mui/icons-material/Edit'
import { LOCAL_STORAGE_LOGGED_USER } from '../../utils/config'

const Account = () => {
    const [changePasswordOpen, setChangePasswordOpen] = useState(false)
    const [editNameOpen, setEditNameOpen] = useState(false)

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

    const handleChangeName = (name) => {
        setEditNameOpen(false)
        accountService.changeName({
            name: name
        })
        .then(response => {
            window.localStorage.setItem(LOCAL_STORAGE_LOGGED_USER, JSON.stringify(response))
            dispatch(setUser(response))
            dispatch(showSuccess('Name changed'))
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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Typography>Name: {user?.user?.name}</Typography>
                <IconButton
                    sx={{
                        marginLeft: 1
                    }}
                    size='small'
                    onClick={() => setEditNameOpen(true)}
                >
                    <EditIcon />
                </IconButton>
            </Box>
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
            <EditName
                isOpen={editNameOpen}
                close={() => setEditNameOpen(false)}
                name={user?.user.name}
                changeName={handleChangeName}
            />
        </>
    )
}

export default Account