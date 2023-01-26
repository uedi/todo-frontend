import React from 'react'
import LoginForm from './LoginForm'
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

const Login = () => {

    const onSubmit = credentials => {
        console.log('login', credentials)
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