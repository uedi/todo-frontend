import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOCAL_STORAGE_LOGGED_USER } from './utils/config'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'
import PublicHeader from './components/PublicHeader'
import { setUser } from './reducers/userReducer'
import { setToken } from './reducers/tokenReducer'
import { setAuthToken } from './utils/auth'
import { setGroups } from './reducers/groupsReducer'
import { setLists } from './reducers/listsReducer'
import { setContacts } from './reducers/contactsReducer'
import groupsService from './services/groups'
import listsService from './services/lists'
import contactsService from './services/contacts'
import Navbar from './components/Navbar'
import { Box, Container } from '@mui/system'

const App = () => {
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)
    const groups = useSelector(state => state.groups)
    const lists = useSelector(state => state.lists)
    const contacts = useSelector(state => state.contacts)

    const dispatch = useDispatch()
    const authenticatedUser = user && token

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(LOCAL_STORAGE_LOGGED_USER)
        if(loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            dispatch(setUser(loggedUser))
            if(loggedUser.token) {
                dispatch(setToken(loggedUser.token))
            } else {
                console.log('user with no token')
            }
        }
    }, [dispatch])

    setAuthToken(user?.token)
    /*
    useEffect(() => {
        setAuthToken(token)
    }, [token])
    */

    useEffect(() => {
        if(authenticatedUser && !groups) {
            groupsService.getAll()
            .then(response => {
                dispatch(setGroups(response))
            })
            .catch(error => {
                console.log('error in get groups', error)
            })
        }
    }, [authenticatedUser, groups, dispatch])

    useEffect(() => {
        if(authenticatedUser && !lists) {
            listsService.getAll()
            .then(response => {
                dispatch(setLists(response))
            })
            .catch(error => {
                console.log('error in get lists', error)
            })
        }
    }, [authenticatedUser, lists, dispatch])

    useEffect(() => {
        if(authenticatedUser && !contacts) {
            contactsService.getAll()
            .then(response => {
                dispatch(setContacts(response))
            })
            .catch(error => {
                console.log('error in get contacts', error)
            })
        }
    }, [authenticatedUser, lists, dispatch])

    if(!user) {
        return (
            <>
                <PublicHeader />
                <PublicRoutes />
            </>
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
            <Box
                sx={{
                    flex: 1,
                    overflow: 'auto'
                }}
            >
                <Container maxWidth='sm'
                    sx={{
                        marginTop: 2
                    }}
                >
                    <Routes />
                </Container>
            </Box>
        </Box>
    )
}

export default App