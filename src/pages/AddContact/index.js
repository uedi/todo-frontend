import React, { useState } from 'react'
import AddContactForm from './AddContactForm'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { CircularProgress } from '@mui/material'
import contactsService from '../../services/contacts'
import { addContact } from '../../reducers/contactsReducer'
import { useNavigate } from 'react-router-dom'

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
            console.log(response)
            dispatch(addContact(response))
            setInProgress(false)
            navigate('/contacts')
        })
        .catch(error => {
            console.log('error in add contact')
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