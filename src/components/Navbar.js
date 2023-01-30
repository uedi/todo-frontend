import React, { useState } from 'react'
import { AppBar, Container, Toolbar, Box, Button, IconButton, Tooltip,
    Menu, MenuItem, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_LOGGED_USER } from '../utils/config'
import { removeUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'

const NavBarButton = ({ text, onClick }) => (
    <Button
        sx={{ my: 2, color: 'white', display: 'block'}}
        onClick={onClick}
    >
        {text}
    </Button>
)

const Navbar = () => {
    const [anchorMenu, setAnchorMenu] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOpenMenu = (event) => {
        setAnchorMenu(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorMenu(null)
    }

    const handleLogout = () => {
        window.localStorage.removeItem(LOCAL_STORAGE_LOGGED_USER)
        dispatch(removeUser())
        navigate('/')
    }

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}}}>
                        <NavBarButton text='Home' onClick={() => navigate('/')} />
                        <NavBarButton text='Groups' onClick={() => navigate('/groups')} />
                        <NavBarButton text='Lists' onClick={() => navigate('/lists')} />
                        <NavBarButton text='Contacts' onClick={() => navigate('/contacts')} />
                    </Box>
                    <Box sx={{ flexGrow: 0}}>
                        <Tooltip title='Menu'>
                            <IconButton
                                size='large'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenMenu}
                                color='inherit'
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id='menu-appbar'
                            sx={{ mt: '45px' }}
                            anchorEl={anchorMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorMenu)}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={() => navigate('Account')}>
                                <Typography textAlign='center'>Account</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <Typography textAlign='center'>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar