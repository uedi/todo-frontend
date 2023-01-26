import React from 'react'
import SignupForm from './SignupForm'
import { Formik } from 'formik'
import * as yup from 'yup'

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

    const onSubmit = signupData => {
        console.log('signup', signupData)
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