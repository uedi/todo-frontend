import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './utils/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <Router>
                <App />
            </Router>
        </StoreProvider>
    </React.StrictMode>
)