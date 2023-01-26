import React from 'react'
import PublicRoutes from './navigation/PublicRoutes'
import Routes from './navigation/Routes'

const App = () => {
    const user = null
    return (
        <>
            { !user && <PublicRoutes /> }
            { user && <Routes /> }
        </>
    )
}

export default App