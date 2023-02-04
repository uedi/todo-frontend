import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import TodoList from '../../components/TodoList'
import todosService from '../../services/todos'
import { updateGroupTodo, addTodoToGroup } from '../../reducers/groupsReducer'
import CreateTodo from '../../components/CreateTodo'

const Group = () => {
    const [todoOpen, setTodoOpen] = useState(false)
    const groups = useSelector(state => state.groups)
    const params = useParams()
    const dispatch = useDispatch()

    const group = groups && groups.find(g => g.id.toString() === params.id)

    if(!group) {
        return null
    }

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

    return (
        <>
            <Button
                onClick={() => setTodoOpen(true)}
            >
                Create new todo
            </Button>
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