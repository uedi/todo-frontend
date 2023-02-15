import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { listWithUrgentTodos } from '../../utils/todos'
import { Typography, Box } from '@mui/material'
import ListList from '../Lists/ListList'

const UrgentLists = () => {
    const [urgentLists, setUrgentLists] = useState([])
    const lists = useSelector(state => state.lists)

    useEffect(() => {
        if(lists) {
            const urgents = []
            for (let list of lists) {
                if(listWithUrgentTodos(list)) {
                    urgents.push(list)
                }
            }
            setUrgentLists(urgents)
        }
    }, [lists])

    if(urgentLists.length === 0) {
        return (
            <Typography variant='h6' sx={{ margin: 2 }}>
                No lists with deadlines soon
            </Typography>
        )
    }

    return (
        <>
            <Typography variant='h6' sx={{ margin: 2 }}>
                Following lists have deadlines soon
            </Typography>
            <ListList lists={urgentLists} />
            <Box sx={{ height: 5 }}/>
        </>
    )

}

export default UrgentLists