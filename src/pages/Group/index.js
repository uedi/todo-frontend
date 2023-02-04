import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import TodoList from '../../components/TodoList'
import todosService from '../../services/todos'
import { updateGroupTodo, addTodoToGroup } from '../../reducers/groupsReducer'
import CreateTodo from '../../components/CreateTodo'
import GroupInfo from './GroupInfo'
import messagesService from '../../services/messages'
import { setGroupMessages } from '../../reducers/messagesReducer'

const Group = () => {
    const [group, setGroup] = useState()
    const [todoOpen, setTodoOpen] = useState(false)
    const groups = useSelector(state => state.groups)
    const messages = useSelector(state => state.messages)
    const params = useParams()
    const dispatch = useDispatch()
    const messageCount = group && messages[group.id] ? messages[group.id].length : null

    useEffect(() => {
        if(groups) {
            setGroup(groups.find(g => g.id.toString() === params.id))
        } else {
            setGroup(null)
        }
    }, [params, groups])

    useEffect(() => {
        if(group && !messages[group.id]) {
            messagesService.getGroupMessages(group.id)
            .then(response => {
                dispatch(setGroupMessages(group.id, response))
            })
            .catch(error => {
                console.log('error in get group messages', error)
            })
        }
    }, [group, dispatch])

    const handleCloseTodo = () => {
        setTodoOpen(false)
    }

    const handleCreateTodo = (data) => {
        const todoToCreate = {
            ...data,
            groupId: group.id
        }
        setTodoOpen(false)
        todosService.create(todoToCreate)
        .then(response => {
            dispatch(addTodoToGroup(group.id, response))
        })
        .catch(error => {
            console.log('error in create todo', error)
        })
    }

    const handleUpdateTodo = (data) => {
        const dataToSend = { ...data, groupId: group?.id }
        todosService.updateTodo(dataToSend)
        .then(response => {
            dispatch(updateGroupTodo(group?.id, response))
        })
        .catch(error => {
            console.log('error in update todo', error)
        })
    }

    if(!group) {
        return null
    }

    return (
        <>
            <Button
                onClick={() => setTodoOpen(true)}
            >
                Create new todo
            </Button>
            <GroupInfo group={group} messageCount={messageCount} />
            <Typography variant='h5' sx={{ margin: 2 }}>Todos ({group.name})</Typography>
            <TodoList todos={group.todos} updateTodo={handleUpdateTodo} />
            <CreateTodo
                isOpen={todoOpen}
                close={handleCloseTodo}
                createTodo={handleCreateTodo}
            />
        </>
        
    )
}

export default Group