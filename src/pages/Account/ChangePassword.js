import React, { useState } from 'react'
import ChangePasswordDialog from './ChangePasswordDialog'

const ChangePassword = ({ isOpen, close, changePassword }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleChange = () => {
        changePassword({
            password: oldPassword,
            newpassword: newPassword
        })
    }

    const handleSetOldPassword = (event) => {
        setOldPassword(event.target.value)
    }

    const handleSetNewPassword = (event) => {
        setNewPassword(event.target.value)
    }

    return (
        <ChangePasswordDialog
            open={isOpen}
            handleClose={close}
            changePassword={handleChange}
            oldPassword={oldPassword}
            setOldPassword={handleSetOldPassword}
            newPassword={newPassword}
            setNewPassword={handleSetNewPassword}
        />
    )
}

export default ChangePassword