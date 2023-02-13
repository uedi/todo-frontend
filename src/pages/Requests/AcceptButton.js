import React from 'react'
import { Button } from '@mui/material'

const AcceptButton = ({ title = 'Accept', onClick}) => {
    return (
        <Button
            variant='contained'
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default AcceptButton