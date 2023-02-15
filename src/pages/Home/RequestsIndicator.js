import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const RequestsIndicator = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const navigate = useNavigate()

    if(membershipRequests === 0) {
        return null
    }

    return (
        <>
            <Button
                onClick={() => navigate('/requests')}
            >
                Membership requests: { membershipRequests || 0 }
            </Button>
        </>
    )
}

export default RequestsIndicator