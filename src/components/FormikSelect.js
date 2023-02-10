import React from 'react'
import { useField } from 'formik'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const FormikSelect = ({ label, name, items, isColor }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <FormControl fullWidth
            sx={{
                backgroundColor: isColor ? field.value : ''
            }}
        >
            <InputLabel id='label'>{label}</InputLabel>
            <Select
                labelId='label'
                value={field.value}
                label={label}
                name={name}
                onChange={event => helpers.setValue(event.target.value)}
            >
            { items.map(item =>
                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )}
            </Select>
        </FormControl>
    )
}

export default FormikSelect