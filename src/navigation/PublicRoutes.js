import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const PublicHome = () => ( <div>PublicHome</div> )
const Signup = () => ( <div>Signup</div> )
const Login = () => ( <div>Login</div> )

const PublicRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PublicHome />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    )
}

export default PublicRoutes