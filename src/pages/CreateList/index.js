import React, { useState } from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CreateListForm from './CreateListForm'
import { CircularProgress } from '@mui/material'
import listsService from '../../services/lists'
import { addList } from '../../reducers/listsReducer'
import { backgroundColorsForSelect } from '../../utils/colors'
import { showSuccess, showError } from '../../reducers/notificationReducer'

const initialValues = {
    name: '',
    color: ''
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
})

const CreateList = () => {
    const [inProgress, setInProgress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = newList => {
        setInProgress(true)
        const listToCreate = {
            ...newList,
            color: newList.color === '' ? null : newList.color
        }
        listsService.create(listToCreate)
        .then(response => {
            dispatch(addList(response))
            navigate('/lists')
            dispatch(showSuccess('List created'))
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
                    {({ handleSubmit }) =>
                        <CreateListForm
                            onSubmit={handleSubmit}
                            colors={backgroundColorsForSelect}
                        />
                    }
                </Formik>
                
            </div>
        </div>
    )
}

export default CreateList