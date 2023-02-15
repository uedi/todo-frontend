import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { listWithUrgentTodos } from '../../utils/todos'
import ListList from '../Lists/ListList'

const Home = () => {
    const requests = useSelector(state => state.requests)
    const lists = useSelector(state => state.lists)
    const [urgentLists, setUrgentLists] = useState([])
    const membershipRequests = requests?.memberships?.length || 0
    const navigate = useNavigate()

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

    const ShowMemberShipRequests = () => (
        <Button
            onClick={() => navigate('/requests')}
        >
            Membership requests: { membershipRequests || 0 }
        </Button>
    )

    return (
        <>
            <Typography variant='h5' sx={{ margin: 2 }}>Home</Typography>
            { membershipRequests > 0 &&
                <ShowMemberShipRequests />
            }
            { urgentLists.length > 0 &&
                <>
                    <Typography variant='h6' sx={{ margin: 2 }}>
                        Following lists have deadlines soon
                    </Typography>
                    <ListList lists={urgentLists} />
                </>
            }
        </>
    )
}

export default Home