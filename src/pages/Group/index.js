import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography, Box, IconButton } from '@mui/material'
import TodoList from '../../components/TodoList'
import todosService from '../../services/todos'
import { updateGroupTodo, addTodoToGroup } from '../../reducers/groupsReducer'
import CreateTodo from '../../components/CreateTodo'
import UpdateTodo from '../../components/UpdateTodo'
import GroupInfo from './GroupInfo'
import messagesService from '../../services/messages'
import { setGroupMessages } from '../../reducers/messagesReducer'
import { deleteGroupTodo } from '../../reducers/groupsReducer'
import DeleteIcon from '@mui/icons-material/Delete'

const Group = () => {
    const [group, setGroup] = useState()
    const [todoOpen, setTodoOpen] = useState(false)
    const [todoToUpdate, setTodoToUpdate] = useState()
    const [updateTodoOpen, setUpdateTodoOpen] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
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

    const handleCloseUpdateTodo = () => {
        setUpdateTodoOpen(false)
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

    const handleUpdateTodoData = (data) => {
        setUpdateTodoOpen(false)
        handleUpdateTodo(data)
    }

    const handleDeleteTodo = (id) => {
        todosService.deleteTodo(id)
        .then(() => {})
        .catch(error => {
            console.log('error in delete todo', error)
        })
        .finally(() => {
            dispatch(deleteGroupTodo(group.id, id))
        })
    }

    const todoClicked = (todo) => {
        setTodoToUpdate(todo)
        setUpdateTodoOpen(true)
    }

    if(!group) {
        return null
    }

    return (
        <>
            <Typography variant='h5'
                    sx={{
                        margin: 2,
                        flex: 1
                    }}
                >
                    Group: {group.name}
            </Typography>
            <GroupInfo group={group} messageCount={messageCount} />
            <Button
                onClick={() => setTodoOpen(true)}
            >
                Create new todo
            </Button>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant='h5'
                    sx={{
                        marginBottom: 2,
                        marginLeft: 2,
                        marginRight: 2,
                        marginTop: 1,
                        flex: 1
                    }}
                >
                    Todos
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginRight: 2
                    }}
                >
                    <IconButton
                        size='small'
                        onClick={() => setShowDelete(!showDelete)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
            <TodoList
                todos={group.todos}
                updateTodo={handleUpdateTodo}
                todoClicked={todoClicked}
                showDelete={showDelete}
                deleteTodo={handleDeleteTodo}
            />
            <CreateTodo
                isOpen={todoOpen}
                close={handleCloseTodo}
                createTodo={handleCreateTodo}
            />
            <UpdateTodo
                isOpen={updateTodoOpen}
                close={handleCloseUpdateTodo}
                updateTodo={handleUpdateTodoData}
                todo={todoToUpdate}
            />
        </>
        
    )
}

export default Group