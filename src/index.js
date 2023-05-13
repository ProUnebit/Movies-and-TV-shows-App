import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.scss';

import { store } from './store/store';
import { Provider } from 'react-redux';




const ROOT = createRoot(document.getElementById('app'));
ROOT.render(
    <Provider store={store}>
        <App />
    </Provider>
)

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) module.hot.accept();