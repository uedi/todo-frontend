import React, { useState } from 'react'
import AddContactForm from './AddContactForm'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { CircularProgress } from '@mui/material'
import contactsService from '../../services/contacts'
import { addContact } from '../../reducers/contactsReducer'
import { useNavigate } from 'react-router-dom'
import { showError, showSuccess } from '../../reducers/notificationReducer'

const initialValues = {
    username: ''
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required')
})

const AddContact = () => {
    const [inProgress, setInProgress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = newContactData => {
        setInProgress(true)
        contactsService.create(newContactData)
        .then(response => {
            dispatch(addContact(response))
            setInProgress(false)
            navigate('/contacts')
            dispatch(showSuccess('Contact added'))
        })
        .catch(error => {
            dispatch(showError(error))
            setInProgress(false)
        })
    }
    if(inProgress) {
        return (
            <div className='center-view-page'>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div className='center-view-page'>
            <div className='form-container signup-login-form'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit }) => <AddContactForm onSubmit={handleSubmit} />}
                </Formik>
                
            </div>
        </div>
    )
}

export default AddContact