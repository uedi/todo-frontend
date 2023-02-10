import React, { useState, useEffect } from 'react'
import EditListDialog from './EditListDialog'

const EditList = ({ list, isOpen, close, update, deleteList }) => {
    const [listName, setListName] = useState('')
    const [color, setColor] = useState('')
    const nameChanged = list && list.name !== listName && listName !== ''
    const colorChanged = list.color !== color && color !== ''
    const changed = nameChanged || colorChanged
    useEffect(() => {
        if(list) {
            setListName(list.name)
            if(list.color) {
                setColor(list.color)
            }
        }
    }, [list])

    const handleSetListName = (event) => {
        setListName(event.target.value)
    }

    const handleUpdate = () => {
        update(list.id, {
            name: listName,
            color: colorChanged ? color : null
        })
    }

    return (
        <EditListDialog
            isOpen={isOpen}
            close={close}
            listName={listName}
            changed={changed}
            setListName={handleSetListName}
            update={handleUpdate}
            deleteList={() => deleteList(list.id)}
            color={color}
            setColor={setColor}
        />
    )
}

export default EditList