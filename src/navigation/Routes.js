import React from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import Groups from '../pages/Groups'
import Lists from '../pages/Lists'
import Group from '../pages/Group'
import List from '../pages/List'

const Home = () => ( <div></div>)

const Routes = () => {
    return (
        <div>
            <RouterRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/groups/:id' element={<Group />} />
                <Route path='/lists' element={<Lists />} />
                <Route path='/lists/:id' element={<List />} />
                <Route path='*' element={<Navigate to='/' />} />
            </RouterRoutes>
        </div>
    )
}

export default Routes