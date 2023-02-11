import React from 'react'
import { Button } from '@mui/material'

const NavBarButton = ({ text, onClick }) => (
    <Button
        sx={{ my: 2, color: 'white', display: 'block'}}
        onClick={onClick}
    >
        {text}
    </Button>
)

export default NavBarButton