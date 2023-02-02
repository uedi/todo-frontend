import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
    const user = useSelector(state => state.user)
    
    return (
        <>
            <h3>Account</h3>
            <p>Name: {user?.user?.name}</p>
            <p>Username: {user?.user?.username}</p>
        </>
    )
}

export default Account