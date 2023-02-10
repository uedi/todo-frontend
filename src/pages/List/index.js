import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography, Box, IconButton } from '@mui/material'
import CreateTodo from '../../components/CreateTodo'
import UpdateTodo from '../../components/UpdateTodo'
import todosService from '../../services/todos'
import listsService from '../../services/lists'
import TodoList from '../../components/TodoList'
import { addTodoToList, updateTodo, deleteTodo, updateList, deleteList } from '../../reducers/listsReducer'
import DeleteIcon from '@mui/icons-material/Delete'
import EditList from './EditList'

const List = () => {
    const [todoOpen, setTodoOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [todoToUpdate, setTodoToUpdate] = useState()
    const [updateTodoOpen, setUpdateTodoOpen] = useState(false)
    const lists = useSelector(state => state.lists)
    const [showDelete, setShowDelete] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handleUpdateList = (id, data) => {
        setEditOpen(false)
        listsService.update(id, data)
        .then(response => {
            dispatch(updateList(response))
        })
        .catch(error => {
            console.log('error in update list', error)
        })
    }

    const handleDeleteList = (id) => {
        setEditOpen(false)
        listsService.remove(id)
        .then(() => {
            navigate('/lists')
            dispatch(deleteList(id))
        })
        .catch(error => {
            console.log('error in delete list', error)
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
                    List:
                </Typography>
                <Button
                    onClick={() => setEditOpen(true)}
                    sx={{
                        fontSize: 21,
                        textTransform: 'unset'
                    }}
                >
                    {list.name}
                </Button>
            </Box>
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
                todos={list.todos}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                showDelete={showDelete}
                todoClicked={todoClicked}
                color={list.color}
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
            <EditList
                isOpen={editOpen}
                close={() => setEditOpen(false)}
                list={list}
                update={handleUpdateList}
                deleteList={handleDeleteList}
            />
        </>
    )
}

export default List