import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) module.hot.accept();