import React from 'react'
import { Box, Container } from '@mui/material'

const AppContainer = ({ children }) => {
    return (
        <Box
            sx={{
                flex: 1,
                overflow: 'auto'
            }}
        >
            <Container maxWidth='sm'
                sx={{
                    marginTop: 2
                }}
            >
                { children }
            </Container>
        </Box>
    )
}

export default AppContainer