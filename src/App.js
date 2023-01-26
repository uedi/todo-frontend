import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOCAL_STORAGE_LOGGED_USER } from './utils/config'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'
import PublicHeader from './components/PublicHeader'
import { setUser } from './reducers/userReducer'
import { setToken } from './reducers/tokenReducer'
import { setAuthToken } from './utils/auth'
import Navbar from './components/Navbar'

const App = () => {
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)

    const dispatch = useDispatch()

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

    useEffect(() => {
        setAuthToken(token)
    }, [token])

    if(!user) {
        return (
            <>
                <PublicHeader />
                <PublicRoutes />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <Routes />
        </>
    )
}

export default App