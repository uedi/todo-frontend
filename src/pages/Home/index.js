import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = () => {
    const requests = useSelector(state => state.requests)
    const membershipRequests = requests?.memberships?.length || 0
    const navigate = useNavigate()

    const ShowMemberShipRequests = () => (
        <Button
            onClick={() => navigate('/requests')}
        >
            Membership requests: { membershipRequests || 0 }
        </Button>
    )

    return (
        <>
            { membershipRequests > 0 &&
                <ShowMemberShipRequests />
            }
        </>
    )
}

export default Home