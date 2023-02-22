import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOCAL_STORAGE_LOGGED_USER } from './utils/config'
import AppContainer from './components/AppContainer'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'
import PublicHeader from './components/PublicHeader'
import { setUser } from './reducers/userReducer'
import { setAuthToken } from './utils/auth'
import { setGroups } from './reducers/groupsReducer'
import { setLists } from './reducers/listsReducer'
import { setContacts } from './reducers/contactsReducer'
import groupsService from './services/groups'
import listsService from './services/lists'
import contactsService from './services/contacts'
import requestsService from './services/requests'
import Navbar from './components/Navbar'
import { Box } from '@mui/material'
import Notification from './components/Notification'
import { setRequests } from './reducers/requestsReducer'

const App = () => {
    const user = useSelector(state => state.user)
    const groups = useSelector(state => state.groups)
    const lists = useSelector(state => state.lists)
    const contacts = useSelector(state => state.contacts)
    const requests = useSelector(state => state.requests)
    const dispatch = useDispatch()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(LOCAL_STORAGE_LOGGED_USER)
        if(loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            dispatch(setUser(loggedUser))
        }
    }, [dispatch])

    setAuthToken(user?.token)

    useEffect(() => {
        if(user && !groups) {
            groupsService.getAll()
            .then(response => {
                dispatch(setGroups(response))
            })
            .catch(error => {
                console.log('error in get groups', error)
            })
        }
    }, [user, groups, dispatch])

    useEffect(() => {
        if(user && !lists) {
            listsService.getAll()
            .then(response => {
                dispatch(setLists(response))
            })
            .catch(error => {
                console.log('error in get lists', error)
            })
        }
    }, [user, lists, dispatch])

    useEffect(() => {
        if(user && !contacts) {
            contactsService.getAll()
            .then(response => {
                dispatch(setContacts(response))
            })
            .catch(error => {
                console.log('error in get contacts', error)
            })
        }
    }, [user, lists, dispatch])

    useEffect(() => {
        if(user && !requests) {
            requestsService.getAll()
            .then(response => {
                dispatch(setRequests(response))
            })
            .catch(error => {
                console.log('error in get requests', error)
            })
        }
    }, [user, requests, dispatch])

    if(!user) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >
                <PublicHeader />
                <AppContainer>
                    <PublicRoutes />
                </AppContainer>
                <Notification />
            </Box>
        )
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}
        >
            <Navbar />
            <AppContainer>
                <Routes />
            </AppContainer>
            <Notification />
        </Box>
    )
}

export default App