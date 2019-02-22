import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import Counter from './counter';

import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { dec, inc, mult, div } = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(
        <Counter counter={store.getState()}
        inc={inc}
        dec={dec}
        mult={mult}
        div={() => {
            const value = Math.floor(Math.random()*10+2);
            div(value)}} />, 
        document.querySelector('#root'));
};
update();
store.subscribe(update);

