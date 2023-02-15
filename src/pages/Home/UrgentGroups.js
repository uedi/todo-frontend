import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Box } from '@mui/material'
import { groupWithUrgentTodos } from '../../utils/todos'
import GroupList from '../Groups/GroupList'

const UrgentGroups = () => {
    const [urgentGroups, setUrgentGroups] = useState([])
    const groups = useSelector(state => state.groups)

    useEffect(() => {
        if(groups) {
            const urgents = []
            for (let group of groups) {
                if(groupWithUrgentTodos(group)) {
                    urgents.push(group)
                }
            }
            setUrgentGroups(urgents)
        }
    }, [groups])

    if(urgentGroups.length === 0) {
        return (
            <Typography variant='h6' sx={{ margin: 2 }}>
                No groups with deadlines soon
            </Typography>
        )
    }

    return (
        <>
            <Typography variant='h6' sx={{ margin: 2 }}>
                Following groups have deadlines soon
            </Typography>
            <GroupList groups={urgentGroups} />
            <Box sx={{ height: 5 }}/>
        </>
    )
}

export default UrgentGroups