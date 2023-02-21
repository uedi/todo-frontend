import React from 'react'
import FormikTextInput from '../../components/FormikTextInput'
import FormikSelect from '../../components/FormikSelect'
import { Button, Grid, Typography } from '@mui/material'

const AddContactForm = ({ onSubmit, colors }) => {
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
                    <FormikSelect name='color' label='Select color (optional)' items={colors} isColor />
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