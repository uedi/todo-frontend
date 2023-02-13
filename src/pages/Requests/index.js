import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const Requests = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const requestsCount = membershipRequests

    if(requestsCount === 0) {
        return (
            <>
                <Typography>No requests</Typography>
            </>
        )
    }

    return (
        <>
            <Typography>Membership requests: { membershipRequests || 0 }</Typography>
        </>
    )
}

export default Requests