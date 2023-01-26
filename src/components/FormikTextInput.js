import React from 'react'
import { useField } from 'formik'
import { TextField } from '@mui/material'

const FormikTextInput = ({ label, name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    const error = meta.touched && meta.error
    const isError = error && true

    return (
        <TextField
            id={name}
            name={name}
            fullWidth
            value={field.value}
            onChange={event => helpers.setValue(event.target.value)}
            label={label}
            {...props}
            error={isError}
        />
    )
}

export default FormikTextInput