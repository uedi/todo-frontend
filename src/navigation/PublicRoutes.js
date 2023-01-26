import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PublicHome from '../pages/PublicHome'
import Login from '../pages/Login'
import Signup from '../pages/Singup'

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