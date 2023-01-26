import React from 'react'
import FormikTextInput from '../../components/FormikTextInput'
import { Button, Grid, Typography } from '@mui/material'

const SignupForm = ({ onSubmit }) => {
    return (
        <>  
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className='form-topic'>Sign up</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextInput name='name' label='Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormikTextInput name='username' label='Username' />
                </Grid>
                <Grid item xs={12}>
                    <FormikTextInput name='password' label='Password' type='password' />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant='contained'
                        onClick={onSubmit}
                        size='large'
                    >
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default SignupForm