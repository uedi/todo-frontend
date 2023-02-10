import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography, Box, IconButton } from '@mui/material'
import TodoList from '../../components/TodoList'
import todosService from '../../services/todos'
import { updateGroupTodo, addTodoToGroup, deleteGroupTodo,
    updateGroup } from '../../reducers/groupsReducer'
import CreateTodo from '../../components/CreateTodo'
import UpdateTodo from '../../components/UpdateTodo'
import GroupInfo from './GroupInfo'
import messagesService from '../../services/messages'
import groupsService from '../../services/groups'
import { setGroupMessages } from '../../reducers/messagesReducer'
import DeleteIcon from '@mui/icons-material/Delete'
import EditGroup from './EditGroup'

const Group = () => {
    const [group, setGroup] = useState()
    const [todoOpen, setTodoOpen] = useState(false)
    const [todoToUpdate, setTodoToUpdate] = useState()
    const [updateTodoOpen, setUpdateTodoOpen] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const groups = useSelector(state => state.groups)
    const messages = useSelector(state => state.messages)
    const params = useParams()
    const dispatch = useDispatch()
    const messageCount = group && messages[group.id] ? messages[group.id].length : null
    const canModify = group?.membership?.owner

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

    const handleUpdateGroup = (id, data) => {
        setEditOpen(false)
        groupsService.update(id, data)
        .then(response => {
            dispatch(updateGroup(response))
        })
        .catch(error => {
            console.log('error in update group', error)
        })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 2
                }}
            >
                <Typography variant='h5'>
                    { canModify ? 'Group:' : `Group: ${group.name}` }
                </Typography>
                { canModify &&
                <Button
                    onClick={() => setEditOpen(true)}
                    sx={{
                        fontSize: 21,
                        textTransform: 'unset'
                    }}
                >
                    {group.name}
                </Button>
                }
            </Box>
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
            { canModify &&
            <EditGroup
                isOpen={editOpen}
                close={() => setEditOpen(false)}
                group={group}
                update={handleUpdateGroup}
            />
            }
        </>
        
    )
}

export default Group