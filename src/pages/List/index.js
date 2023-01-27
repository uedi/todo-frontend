import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const List = () => {
    const lists = useSelector(state => state.lists)
    const params = useParams()

    const list = lists && lists.find(l => l.id.toString() === params.id)

    if(!list) {
        return null
    }

    return (
        <div>{list.name}</div>
    )
}

export default List