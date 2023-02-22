import React, { useState } from 'react'
import EditNameDialog from './EditNameDialog'

const EditName = ({ isOpen, close, name, changeName }) => {
    const [newName, setNewName] = useState(name)
    const saveEnabled = newName && name !== newName && newName !== ''

    const handleChange = () => {
        changeName(newName)
    }

    const handleSetNewName = (event) => {
        setNewName(event.target.value)
    }

    return (
        <EditNameDialog
            open={isOpen}
            handleClose={close}
            changeName={handleChange}
            saveEnabled={saveEnabled}
            newName={newName}
            setNewName={handleSetNewName}
        />
    )
}

export default EditName