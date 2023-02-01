import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const contacts = useSelector(state => state.contacts)
    const params = useParams()

    const contact = contacts && contacts.find(c => c.contactId.toString() === params.id)

    if(!contact) {
        return null
    }

    return (
        <div>
            {contact.name}
        </div>
        
    )
}

export default Contact