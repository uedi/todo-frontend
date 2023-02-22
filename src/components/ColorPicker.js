import React from 'react'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { backgroundColorsForSelect } from '../utils/colors'

const ColorPicker = ({ color = '', setColor }) => {
    return (
        <FormControl fullWidth
            sx={{
                backgroundColor: color
            }}
        >
            <InputLabel id='label'>Select color</InputLabel>
            <Select
                labelId='label'
                value={color}
                label='Select color'
                name='color'
                onChange={event => setColor(event.target.value)}
                MenuProps={{
                    sx: {
                        '&& .Mui-selected': {
                            backgroundColor: color,
                            fontWeight: 'bold'
                        }
                    }
                }}
            >
            { backgroundColorsForSelect.map(item =>
                <MenuItem
                    key={item.id}
                    value={item.id}
                    sx={{
                        bgcolor: item.id,
                    }}
                >
                    {item.name}
                </MenuItem>
            )}
            </Select>
        </FormControl>

    )
}

export default ColorPicker