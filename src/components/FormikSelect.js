import React from 'react'
import { useField } from 'formik'
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const FormikSelect = ({ label, name, items }) => {
    const [field, meta, helpers] = useField(name)
    
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
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