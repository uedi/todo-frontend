import React from 'react'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'

const Account = () => {
    const user = useSelector(state => state.user)
    
    return (
        <Container maxWidth='lg'>
            <h3>Account</h3>
            <p>Name: {user?.user?.name}</p>
            <p>Username: {user?.user?.username}</p>
        </Container>
    )
}

export default Account