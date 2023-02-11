import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SignupForm from './SignupForm'
import { Formik } from 'formik'
import * as yup from 'yup'
import { CircularProgress } from '@mui/material'
import accountService from '../../services/account'
import { setUser } from '../../reducers/userReducer'
import { setToken } from '../../reducers/tokenReducer'
import { LOCAL_STORAGE_LOGGED_USER } from '../../utils/config'
import { showError } from '../../reducers/notificationReducer'

const initialValues = {
    name: '',
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

const Signup = () => {
    const [inProgress, setInProgress] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = signupData => {
        setInProgress(true)
        accountService.signup(signupData)
        .then(response => {
            window.localStorage.setItem(LOCAL_STORAGE_LOGGED_USER, JSON.stringify(response))
            dispatch(setUser(response))
            if(response.token) {
                dispatch(setToken(response.token))
            } else {
                console.log('no token in response')
            }
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
                    {({ handleSubmit }) => <SignupForm onSubmit={handleSubmit} />}
                </Formik>
                
            </div>
        </div>
    )
}

export default Signup