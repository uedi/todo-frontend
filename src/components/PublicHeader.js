import React from 'react'
import { Link } from 'react-router-dom'

const PublicHeader = () => {
    return (
        <div className='header'>
            <div className='header-navigation'>
                <Link to='/'>Home</Link>
            </div>
            <div className='header-control'>
                <Link className='header-signup' to='/signup'>Signup</Link>
                <Link className='header-login' to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default PublicHeader