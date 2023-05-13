import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.scss';

// let container = null;

// document.addEventListener('DOMContentLoaded', (event) => {
//     if ( !container ) {
//         container = document.getElementById('app');
//         const root = createRoot(container);
//         root.render(
//             <React.StrictMode>
//                 <App />
//             </React.StrictMode>
//         )
//     }
// })

const ROOT = createRoot(document.getElementById('app'));
ROOT.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
)

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) module.hot.accept();