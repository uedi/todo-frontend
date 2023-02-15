import React from 'react'
import { Typography } from '@mui/material'
import UrgentLists from './UrgentLists'
import UrgentGroups from './UrgentGroups'
import RequestsIndicator from './RequestsIndicator'

const Home = () => {
    return (
        <>
            <Typography variant='h5' sx={{ margin: 2 }}>Home</Typography>
            <RequestsIndicator />
            <UrgentLists />
            <UrgentGroups />
        </>
    )
}

export default Home