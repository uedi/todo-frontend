import React from 'react'
import { useSelector } from 'react-redux'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'
import PublicHeader from './components/PublicHeader'

const App = () => {
    const user = useSelector(state => state.user)
console.log(user)
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
            <Routes />
        </>
    )
}

export default App