import React from 'react'
import { Button } from '@mui/material'

const RejectButton = ({ title = 'Reject', onClick}) => {
    return (
        <Button
            variant='outlined'
            color='error'
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default RejectButton