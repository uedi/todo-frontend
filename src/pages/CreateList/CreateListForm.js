import React from 'react'
import FormikTextInput from '../../components/FormikTextInput'
import FormikSelect from '../../components/FormikSelect'
import { Button, Grid, Typography } from '@mui/material'

const CreateListForm = ({ onSubmit, colors }) => {
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
                    <FormikSelect name='color' label='Select color (optional)' items={colors} isColor />
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