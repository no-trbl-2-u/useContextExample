import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

import Store from './Store/Store'

ReactDOM.render(
    <Store>
        <App />
    </Store>,
    document.getElementById('root')
);
