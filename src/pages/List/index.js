import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { Button } from '@mui/material'
import CreateTodoDialog from '../../components/CreateTodoDialog'
import todosService from '../../services/todos'
import TodoList from '../../components/TodoList'

const List = () => {
    const [todoOpen, setTodoOpen] = useState(false)
    const [todoName, setTodoName] = useState('')
    const lists = useSelector(state => state.lists)
    const params = useParams()

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
            listId: list.id
        }
        setTodoOpen(false)
        todosService.create(todoToCreate)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('error in create todo', error)
        })
    }

    const handleSetTodoName = (event) => {
        setTodoName(event.target.value)
    }

    return (
        <Container maxWidth='lg'>
            <Button
                onClick={() => setTodoOpen(true)}
            >
                Create new todo
            </Button>
            <h3>Todos ({list.name})</h3>
            <TodoList todos={list.todos} />
            <CreateTodoDialog
                open={todoOpen}
                handleClose={handleCloseTodo}
                handleCreate={handleCreateTodo}
                todoName={todoName}
                setTodoName={handleSetTodoName}
            />
        </Container>
    )
}

export default List