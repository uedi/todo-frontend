import React from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'

const Home = () => ( <div>Home</div>)

const Routes = () => {
    return (
        <div>
            <RouterRoutes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Navigate to='/' />} />
            </RouterRoutes>
        </div>
    )
}

export default Routes