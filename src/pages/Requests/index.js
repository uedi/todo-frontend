import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import RequestList from './RequestList'
import requestsService from '../../services/requests'
import { setMembershipRequests } from '../../reducers/requestsReducer'
import { useDispatch } from 'react-redux'
import { addGroup } from '../../reducers/groupsReducer'
import { showError, showSuccess } from '../../reducers/notificationReducer'

const Requests = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const requestsCount = membershipRequests
    const dispatch = useDispatch()

    const handleMembershipRequest = (data) => {
        requestsService.replyMembership(data)
        .then(response => {
            dispatch(setMembershipRequests(response.memberships))
            dispatch(addGroup(response.group))
            dispatch(showSuccess('Joined group'))
        })
        .catch(error => {
            dispatch(showError(error))
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