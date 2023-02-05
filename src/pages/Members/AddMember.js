import React from 'react'
import AddMemberDialog from './AddMemberDialog'

const AddMember = ({ isOpen, close, addMember, memberIds, contacts }) => {
    return (
        <AddMemberDialog
            isOpen={isOpen}
            close={close}
            addMember={addMember}
            contacts={contacts}
            memberIds={memberIds}
        />
    )
}

export default AddMember