import React, { useState } from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CreateListForm from './CreateListForm'
import { CircularProgress } from '@mui/material'
import listsService from '../../services/lists'
import { addList } from '../../reducers/listsReducer'

const initialValues = {
    name: '',
    groupId: ''
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
})


const CreateList = () => {
    const [inProgress, setInProgress] = useState(false)
    const groups = useSelector(state => state.groups)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const groupsToShow = groups || []

    const onSubmit = newList => {
        setInProgress(true)
        const listToCreate = {
            ...newList,
            groupId: newList.groupId === '' ? null : newList.groupId
        }
        listsService.create(listToCreate)
        .then(response => {
            dispatch(addList(response))
            navigate('/lists')
        })
        .catch(error => {
            console.log('error in create list', error)
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
                    {({ handleSubmit }) => <CreateListForm onSubmit={handleSubmit} groups={groupsToShow} />}
                </Formik>
                
            </div>
        </div>
    )
}

export default CreateList