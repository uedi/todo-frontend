import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Group = () => {
    const groups = useSelector(state => state.groups)
    const params = useParams()

    const group = groups && groups.find(g => g.id.toString() === params.id)

    if(!group) {
        return null
    }

    return (
        <div>
            {group.name}
        </div>
        
    )
}

export default Group