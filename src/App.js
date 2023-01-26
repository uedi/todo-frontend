import React from 'react'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'
import PublicHeader from './components/PublicHeader'

const App = () => {
    const user = null

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