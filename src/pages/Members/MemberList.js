import React from 'react'
import { Typography } from '@mui/material'
import ItemContainer from '../../components/ItemContainer'

const MemberListItem = ({ member, memberClicked, myId, contactIds }) => {
    const isMe = myId === member.id
    const isContact = contactIds.includes(member.id)
    const info = isMe ? ' (me)' : isContact ? '' : ' (not contact)'

    return (
        <ItemContainer
            onClick={() => memberClicked(member)}
        >
            <Typography>{member.name}{info}</Typography>
        </ItemContainer>
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