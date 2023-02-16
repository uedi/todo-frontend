import React, { useState, useEffect } from 'react'
import EditGroupDialog from './EditGroupDialog'

const EditGroup = ({ group, isOpen, close, update, deleteGroup }) => {
    const [groupName, setGroupName] = useState('')
    const [color, setColor] = useState('')
    const nameChanged = group && group.name !== groupName && groupName !== ''
    const colorChanged = group.color !== color && color !== ''
    const changed = nameChanged || colorChanged

    useEffect(() => {
        if(group) {
            setGroupName(group.name)
            if(group.color) {
                setColor(group.color)
            }
        }
    }, [group])

    const handleSetGroupName = (event) => {
        setGroupName(event.target.value)
    }

    const handleUpdate = () => {
        update(group.id, {
            name: groupName,
            color: colorChanged ? color : null
        })
    }

    return (
        <EditGroupDialog
            isOpen={isOpen}
            close={close}
            groupName={groupName}
            changed={changed}
            setGroupName={handleSetGroupName}
            update={handleUpdate}
            deleteGroup={() => deleteGroup(group.id)}
            color={color}
            setColor={setColor}
        />
    )
}

export default EditGroup