import React, { useState, useEffect } from 'react'
import UpdateTodoDialog from './UpdateTodoDialog'

const UpdateTodo = ({ todo, isOpen, close, updateTodo }) => {
    const [todoName, setTodoName] = useState('')
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const nameChanged = todo && todo.name !== todoName && todoName !== ''
    const startChanged = todo && todo.start !== startDate
    const endChanged = todo && todo.end !== endDate
    const changed = nameChanged || startChanged || endChanged

    useEffect(() => {
        if(todo) {
            setTodoName(todo?.name)
            setStartDate(todo?.start)
            setEndDate(todo?.end)
        }
    }, [todo])

    const handleUpdate = () => {
        updateTodo({
            id: todo?.id,
            name: todoName,
            start: startDate,
            end: endDate,
            done: todo?.done
        })
    }

    const handleSetTodoName = (event) => {
        setTodoName(event.target.value)
    }

    return (
        <UpdateTodoDialog
            open={isOpen}
            handleClose={close}
            handleUpdate={handleUpdate}
            todoName={todoName}
            setTodoName={handleSetTodoName}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            changed={changed}
        />
    )
}

export default UpdateTodo