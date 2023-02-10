import React, { useState, useEffect } from 'react'
import EditGroupDialog from './EditGroupDialog'

const EditGroup = ({ group, isOpen, close, update }) => {
    const [groupName, setGroupName] = useState('')
    const nameChanged = group && group.name !== groupName && groupName !== ''

    useEffect(() => {
        if(group) {
            setGroupName(group.name)
        }
    }, [group])

    const handleSetGroupName = (event) => {
        setGroupName(event.target.value)
    }

    const handleUpdate = () => {
        update(group.id, {
            name: groupName
        })
    }

    return (
        <EditGroupDialog
            isOpen={isOpen}
            close={close}
            groupName={groupName}
            changed={nameChanged}
            setGroupName={handleSetGroupName}
            update={handleUpdate}
        />
    )
}

export default EditGroup