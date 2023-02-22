import React from 'react'
import { LightenDarkenColor } from 'lighten-darken-color'
import { Box } from '@mui/material'

const ItemContainer = ({ children, color = '#ffffff', onClick }) => {
    const darkerColor = LightenDarkenColor(color, -10)

    return (
        <Box
            onClick={onClick}
            sx={{
                backgroundColor: color,
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                '&:hover': {
                    backgroundColor: darkerColor
                }
            }}
        >
            { children }
        </Box>
    )
}

export default ItemContainer