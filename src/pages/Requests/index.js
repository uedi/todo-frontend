import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import RequestList from './RequestList'

const Requests = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const requestsCount = membershipRequests

    const handleMembershipRequest = (data) => {
        console.log(data)
    }

    if(!requests) {
        return null
    }

    if(requestsCount === 0) {
        return (
            <>
                <Typography>No requests</Typography>
            </>
        )
    }

    return (
        <>
            <RequestList
                requests={requests}
                handleMembershipRequest={handleMembershipRequest}
            />
        </>
    )
}

export default Requests