import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography, Box, IconButton } from '@mui/material'
import CreateTodo from '../../components/CreateTodo'
import UpdateTodo from '../../components/UpdateTodo'
import todosService from '../../services/todos'
import TodoList from '../../components/TodoList'
import { addTodoToList, updateTodo, deleteTodo } from '../../reducers/listsReducer'
import DeleteIcon from '@mui/icons-material/Delete'

const List = () => {
    const [todoOpen, setTodoOpen] = useState(false)
    const [todoToUpdate, setTodoToUpdate] = useState()
    const [updateTodoOpen, setUpdateTodoOpen] = useState(false)
    const lists = useSelector(state => state.lists)
    const [showDelete, setShowDelete] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()

    const list = lists && lists.find(l => l.id.toString() === params.id)

    if(!list) {
        return null
    }

    const handleCloseTodo = () => {
        setTodoOpen(false)
    }

    const handleCloseUpdateTodo = () => {
        setUpdateTodoOpen(false)
    }

    const handleCreateTodo = (data) => {
        const todoToCreate = {
            ...data,
            listId: list.id
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
            dispatch(deleteTodo(list.id, id))
        })
    }

    const todoClicked = (todo) => {
        setTodoToUpdate(todo)
        setUpdateTodoOpen(true)
    }

    return (
        <>
            <Button
                onClick={() => setTodoOpen(true)}
            >
                Create new todo
            </Button>
            <Typography variant='h5'
                sx={{
                    margin: 2,
                    flex: 1
                }}
            >
                List: {list.name}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant='h5'
                    sx={{
                        margin: 2,
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
                todos={list.todos}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                showDelete={showDelete}
                todoClicked={todoClicked}
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

export default List