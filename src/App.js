import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOCAL_STORAGE_LOGGED_USER } from './utils/config'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'
import PublicHeader from './components/PublicHeader'
import { setUser } from './reducers/userReducer'
import Navbar from './components/Navbar'

const App = () => {
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(LOCAL_STORAGE_LOGGED_USER)
        if(loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            dispatch(setUser(loggedUser))
        }
    }, [dispatch])

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