import React from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import Groups from '../pages/Groups'
import Lists from '../pages/Lists'
import Group from '../pages/Group'
import List from '../pages/List'
import CreateGroup from '../pages/CreateGroup'
import CreateList from '../pages/CreateList'
import Contacts from '../pages/Contacts'
import AddContact from '../pages/AddContact'
import Account from '../pages/Account'
import Contact from '../pages/Contact'

const Home = () => ( <div></div>)

const Routes = () => {
    return (
        <div>
            <RouterRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/groups/new' element={<CreateGroup />} />
                <Route path='/groups/:id' element={<Group />} />
                <Route path='/lists' element={<Lists />} />
                <Route path='/lists/new' element={<CreateList />} />
                <Route path='/lists/:id' element={<List />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/contacts/new' element={<AddContact />} />
                <Route path='/contacts/:id' element={<Contact />} />
                <Route path='/account' element={<Account />} />
                <Route path='*' element={<Navigate to='/' />} />
            </RouterRoutes>
        </div>
    )
}

export default Routes