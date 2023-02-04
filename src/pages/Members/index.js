import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import MemberList from './MemberList'

const Members = () => {
    const [group, setGroup] = useState()
    const groups = useSelector(state => state.groups)
    const params = useParams()

    useEffect(() => {
        if(groups) {
            const g = groups.find(g => g.id.toString() === params.id)
            setGroup(g)
        } else {
            setGroup(null)
        }
    }, [groups])

    return (
        <>
            <Button>
                Add member
            </Button>
            <Typography variant='h5' sx={{ margin: 2 }}>Group members ({group?.name})</Typography>
            <MemberList members={group?.users} />
        </>
    )
}

export default Members