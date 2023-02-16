import React from 'react'
import { Box, Typography } from '@mui/material'

const MemberListItem = ({ member, memberClicked, myId, contactIds }) => {
    const isMe = myId === member.id
    const isContact = contactIds.includes(member.id)
    const info = isMe ? ' (me)' : isContact ? '' : ' (not contact)'
    return (
        <Box
            onClick={() => memberClicked(member)}
            sx={{
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: '#f5f5f5'
                }
            }}
        >
            <Typography>{member.name}{info}</Typography>
        </Box>
    )
}

const MemberList = ({ members, memberClicked, myId, contactIds }) => {

    if(!members) {
        return null
    }

    return (
        <>  
            { members.map(member =>
                <MemberListItem
                    key={member.id}
                    member={member}
                    memberClicked={memberClicked}
                    contactIds={contactIds}
                    myId={myId}
                />
            )}
        </>
    )
}

export default MemberList