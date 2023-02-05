import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import MemberList from './MemberList'
import AddMember from './AddMember'
import groupsService from '../../services/groups'
import { setMembers } from '../../reducers/groupsReducer'

const Members = () => {
    const [addMemberOpen, setAddMemberOpen] = useState(false)
    const [group, setGroup] = useState()
    const groups = useSelector(state => state.groups)
    const contacts = useSelector(state => state.contacts)
    const params = useParams()
    const dispatch = useDispatch()
    const memberIds = group?.users ? group.users.map(u => u.id) : []

    useEffect(() => {
        if(groups) {
            const g = groups.find(g => g.id.toString() === params.id)
            setGroup(g)
        } else {
            setGroup(null)
        }
    }, [groups])

    const addMember = (id) => {
        setAddMemberOpen(false)
        groupsService.addMember(group.id, { contactId: id })
        .then(response => {
            dispatch(setMembers(group.id, response))
        })
        .catch(error => {
            console.log('error in add group member', error)
        })
    }

    return (
        <>
            <Button
                onClick={() => setAddMemberOpen(true)}
            >
                Add member
            </Button>
            <Typography variant='h5' sx={{ margin: 2 }}>Group members ({group?.name})</Typography>
            <MemberList members={group?.users} />
            <AddMember
                isOpen={addMemberOpen}
                close={() => setAddMemberOpen(false)}
                addMember={addMember}
                memberIds={memberIds}
                contacts={contacts}
            />
        </>
    )
}

export default Members