import React, { useState } from 'react'
import CreateTodoDialog from './CreateTodoDialog'

const CreateTodo = ({ isOpen, close, createTodo }) => {
    const [todoName, setTodoName] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const handleCreate = () => {
        createTodo({
            name: todoName,
            start: startDate,
            end: endDate
        })
    }

    const handleSetTodoName = (event) => {
        setTodoName(event.target.value)
    }

    return (
        <CreateTodoDialog
            open={isOpen}
            handleClose={close}
            handleCreate={handleCreate}
            todoName={todoName}
            setTodoName={handleSetTodoName}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
        />
    )
}

export default CreateTodo