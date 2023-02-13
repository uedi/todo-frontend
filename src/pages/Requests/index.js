import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import RequestList from './RequestList'
import requestsService from '../../services/requests'
import { setMembershipRequests } from '../../reducers/requestsReducer'
import { useDispatch } from 'react-redux'

const Requests = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const requestsCount = membershipRequests
    const dispatch = useDispatch()

    const handleMembershipRequest = (data) => {
        requestsService.replyMembership(data)
        .then(response => {
            dispatch(setMembershipRequests(response))
        })
        .catch(error => {
            console.log('error in reply membership', error)
        })
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