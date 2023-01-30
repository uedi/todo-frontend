import React from 'react'
import FormikTextInput from '../../components/FormikTextInput'
import { Button, Grid, Typography } from '@mui/material'

const AddContactForm = ({ onSubmit }) => {
    return (
        <>  
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className='form-topic'>Add contact</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormikTextInput name='username' label='Username' />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant='contained'
                        onClick={onSubmit}
                        size='large'
                    >
                        Add contact
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddContactForm