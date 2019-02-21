import { createStore } from 'redux';

const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'MULT':
            return state * state;
        case 'DIV':
            return state / Math.floor(Math.random()*10);

            default:
            return state;
    }    
};

const store = createStore(reducer);
const counter = document.querySelector('#counter');

store.subscribe(() => counter.innerHTML = store.getState());

document.querySelector('#dec').addEventListener('click', () => store.dispatch({type: 'DEC'}));
document.querySelector('#inc').addEventListener('click', () => store.dispatch({type: 'INC'}));
document.querySelector('#mult').addEventListener('click', () => store.dispatch({type: 'MULT'}));
document.querySelector('#div').addEventListener('click', () => store.dispatch({type: 'DIV'}));
