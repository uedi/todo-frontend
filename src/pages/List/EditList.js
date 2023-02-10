import React, { useState, useEffect } from 'react'
import EditListDialog from './EditListDialog'

const EditList = ({ list, isOpen, close, update }) => {
    const [listName, setListName] = useState('')
    const nameChanged = list && list.name !== listName && listName !== ''

    useEffect(() => {
        if(list) {
            setListName(list.name)
        }
    }, [list])

    const handleSetListName = (event) => {
        setListName(event.target.value)
    }

    const handleUpdate = () => {
        update({
            id: list.id,
            name: listName
        })
    }

    return (
        <EditListDialog
            isOpen={isOpen}
            close={close}
            listName={listName}
            changed={nameChanged}
            setListName={handleSetListName}
            update={handleUpdate}
        />
    )
}

export default EditList