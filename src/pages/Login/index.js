import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from './LoginForm'
import { Formik } from 'formik'
import * as yup from 'yup'
import { CircularProgress } from '@mui/material'
import accountService from '../../services/account'
import { setUser } from '../../reducers/userReducer'

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

const Login = () => {
    const [inProgress, setInProgress] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = credentials => {
        setInProgress(true)
        accountService.login(credentials)
        .then(response => {
            dispatch(setUser(response))
        })
        .catch(error => {
            console.log('error in login', error)
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
                    {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
                </Formik>
                
            </div>
        </div>
    )
}

export default Login