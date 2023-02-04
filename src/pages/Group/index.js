import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import TodoList from '../../components/TodoList'
import todosService from '../../services/todos'
import { updateGroupTodo } from '../../reducers/groupsReducer'

const Group = () => {
    const groups = useSelector(state => state.groups)
    const params = useParams()
    const dispatch = useDispatch()

    const group = groups && groups.find(g => g.id.toString() === params.id)

    if(!group) {
        return null
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
            <Typography variant='h5' sx={{ margin: 2 }}>Todos ({group.name})</Typography>
            <TodoList todos={group.todos} updateTodo={handleUpdateTodo} />
        </>
        
    )
}

export default Group