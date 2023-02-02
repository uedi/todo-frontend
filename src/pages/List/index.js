import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import CreateTodoDialog from '../../components/CreateTodoDialog'
import todosService from '../../services/todos'
import TodoList from '../../components/TodoList'
import { addTodoToList, updateTodo } from '../../reducers/listsReducer'

const List = () => {
    const [todoOpen, setTodoOpen] = useState(false)
    const [todoName, setTodoName] = useState('')
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const lists = useSelector(state => state.lists)
    const params = useParams()
    const dispatch = useDispatch()

    const list = lists && lists.find(l => l.id.toString() === params.id)

    if(!list) {
        return null
    }

    const handleCloseTodo = () => {
        setTodoOpen(false)
    }

    const handleCreateTodo = () => {
        const todoToCreate = {
            name: todoName,
            listId: list.id,
            start: startDate,
            end: endDate
        }
        setTodoOpen(false)
        todosService.create(todoToCreate)
        .then(response => {
            dispatch(addTodoToList(list.id, response))
        })
        .catch(error => {
            console.log('error in create todo', error)
        })
    }

    const handleUpdateTodo = (data) => {
        const dataToSend = { ...data, listId: list?.id }
        todosService.updateTodo(dataToSend)
        .then(response => {
            dispatch(updateTodo(list?.id, response))
        })
        .catch(error => {
            console.log('error in update todo', error)
        })
    }

    const handleSetTodoName = (event) => {
        setTodoName(event.target.value)
    }

    return (
        <>
            <Button
                onClick={() => setTodoOpen(true)}
            >
                Create new todo
            </Button>
            <Typography variant='h5' sx={{ margin: 2 }}>Todos ({list.name})</Typography>
            <TodoList todos={list.todos} updateTodo={handleUpdateTodo} />
            <CreateTodoDialog
                open={todoOpen}
                handleClose={handleCloseTodo}
                handleCreate={handleCreateTodo}
                todoName={todoName}
                setTodoName={handleSetTodoName}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
            />
        </>
    )
}

export default List