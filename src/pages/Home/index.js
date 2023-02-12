import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const Home = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length

    const ShowMemberShipRequests = () => (
        <Typography>Membership requests: { membershipRequests || 0 }</Typography>
    )

    return (
        <>
            { membershipRequests &&
                <ShowMemberShipRequests />
            }
        </>
    )
}

export default Home