import React from 'react'
import { AppBar, Container, Toolbar, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import NavBarButton from './NavBarButton'

const PublicHeader = () => {
    const navigate = useNavigate()

    return (
        <AppBar position='static'>
            <Container maxWidth='sm'>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}}}>
                        <NavBarButton text='Home' onClick={() => navigate('/')} />
                        <Box sx={{ flex: 1}} />
                        <NavBarButton text='Signup' onClick={() => navigate('/signup')} />
                        <NavBarButton text='Login' onClick={() => navigate('/login')} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default PublicHeader