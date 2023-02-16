import React from 'react'
import { useNavigate } from 'react-router-dom'
import GroupListItem from './GroupListItem'

const GroupList = ({ groups }) => {
    const navigate = useNavigate()

    if(!groups) {
        return null
    }

    const handleClick = (id) => {
        navigate(`/groups/${id}`)
    }

    return (
        <>  
            { groups.map(group =>
                <GroupListItem
                    key={group.id}
                    group={group}
                    handleClick={handleClick}
                />
            )}
        </>
    )
}

export default GroupList