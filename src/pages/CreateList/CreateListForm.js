import React from 'react'
import FormikTextInput from '../../components/FormikTextInput'
import FormikSelect from '../../components/FormikSelect'
import { Button, Grid, Typography } from '@mui/material'

const CreateListForm = ({ onSubmit, groups }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography className='form-topic'>Create new list</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormikTextInput name='name' label='Name' />
                </Grid>
                <Grid item xs={12}>
                    <FormikSelect name='groupId' label='Select group (optional)' items={groups} />
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

export default CreateListForm