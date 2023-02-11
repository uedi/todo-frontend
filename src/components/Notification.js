import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Snackbar, Alert as MuiAlert } from '@mui/material'
import { removeNotification } from '../reducers/notificationReducer'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
})

const Notification = () => {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch()

    if (!notification) {
        return null
    }

    const handleClose = () => {
        dispatch(removeNotification())
    }

    return (
        <Snackbar open={true} onClose={handleClose}
            sx={{ marginRight: 20 }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={notification.type } sx={{ width: '100%' }}>
                { notification.message }
            </Alert>
        </Snackbar>
    )

}

export default Notification