import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/app.js';
import { Provider } from 'react-redux';

import reducer from './reducer';


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root'));

