import React from 'react'
import FormikTextInput from '../../components/FormikTextInput'
import { Button, Grid, Typography } from '@mui/material'

const CreateGroupForm = ({ onSubmit }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className='form-topic'>Create new group</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormikTextInput name='name' label='Name' />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant='contained'
                        onClick={onSubmit}
                        size='large'
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default CreateGroupForm