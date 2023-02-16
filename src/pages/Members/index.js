import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import MemberList from './MemberList'
import AddMember from './AddMember'
import groupsService from '../../services/groups'
import { setMembers } from '../../reducers/groupsReducer'
import ContactInfo from '../../components/ContactInfo'
import { showError, showSuccess } from '../../reducers/notificationReducer'

const Members = () => {
    const [addMemberOpen, setAddMemberOpen] = useState(false)
    const [group, setGroup] = useState()
    const [contactInfoOpen, setContactInfoOpen] = useState(false)
    const [contactToShow, setContactToShow] = useState(false)
    const user = useSelector(state => state.user)
    const groups = useSelector(state => state.groups)
    const contacts = useSelector(state => state.contacts)
    const params = useParams()
    const dispatch = useDispatch()
    const memberIds = group?.users ? group.users.map(u => u.id) : []
    const isOwner = group?.membership.owner
    const myId = user?.user?.id

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
            dispatch(showSuccess('Member invited'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    const memberClicked = (member) => {
        setContactToShow(member)
        setContactInfoOpen(true)
    }

    const handleRemoveContact = (id) => {
        setContactInfoOpen(false)
        groupsService.removeMember(group.id, id)
        .then(response => {
            dispatch(setMembers(group.id, response))
            dispatch(showSuccess('Member removed'))
        })
        .catch(error => {
            dispatch(showError(error))
        })
    }

    return (
        <>
            { isOwner &&
            <Button
                onClick={() => setAddMemberOpen(true)}
            >
                Add member
            </Button>
            }
            <Typography variant='h5' sx={{ margin: 2 }}>Group members ({group?.name})</Typography>
            <MemberList
                members={group?.users}
                memberClicked={memberClicked}
                myId={myId}
            />
            { isOwner &&
            <AddMember
                isOpen={addMemberOpen}
                close={() => setAddMemberOpen(false)}
                addMember={addMember}
                memberIds={memberIds}
                contacts={contacts}
            />
            }
            <ContactInfo
                isOpen={contactInfoOpen}
                close={() => setContactInfoOpen(false)}
                contact={contactToShow}
                removeContact={handleRemoveContact}
                removeText={'Remove from group'}
                showRemove={isOwner}
                myId={myId}
            />
        </>
    )
}

export default Members