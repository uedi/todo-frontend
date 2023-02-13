import React from 'react'
import { Typography } from '@mui/material'
import MembershipRequestItem from './MembershipRequestItem'

const RequestList = ({ requests, handleMembershipRequest }) => {
    const membershipRequests = requests?.memberships || []

    const handleMembership = (groupId, reject) => {
        const response = {
            groupId: groupId,
            reject: reject
        }
        handleMembershipRequest(response)
    }

    return (
        <>
            <Typography>Membership requests</Typography>
            { membershipRequests.map(m =>
                <MembershipRequestItem
                    key={m.groupId}
                    request={m}
                    accept={() => handleMembership(m.groupId, false)}
                    reject={() => handleMembership(m.groupId, true)}
                />
            )}
        </>
    )
}

export default RequestList