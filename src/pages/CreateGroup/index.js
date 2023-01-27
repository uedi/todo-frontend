import React, { useState } from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CreateGroupForm from './CreateGroupForm'
import { CircularProgress } from '@mui/material'
import groupsService from '../../services/groups'
import { addGroup } from '../../reducers/groupsReducer'

const initialValues = {
    name: ''
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
})

const CreateGroup = () => {
    const [inProgress, setInProgress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = newGroup => {
        setInProgress(true)
        groupsService.create(newGroup)
        .then(response => {
            dispatch(addGroup(response))
            navigate('/groups')
        })
        .catch(error => {
            console.log('error in create group', error)
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
                    {({ handleSubmit }) => <CreateGroupForm onSubmit={handleSubmit} />}
                </Formik>
                
            </div>
        </div>
    )
}

export default CreateGroup