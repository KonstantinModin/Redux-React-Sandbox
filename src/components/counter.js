import React from 'react';
import './counter.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, mult, div }) => {
    return (
        <div className="jumbotron">
            <h1>Redux Sandbox</h1>
            <h2>{ counter }</h2>
            <h3>0</h3>
            <button 
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button 
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button 
                onClick={mult}
                className="btn btn-primary btn-lg">MULT</button>
            <button 
                onClick={div}
                className="btn btn-primary btn-lg">DIV</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    
    const {inc, dec, mult, div } = bindActionCreators(actions, dispatch);
    return {
       inc,
       dec,
       mult,
       div: () => {
           const value = Math.floor(Math.random()*10+2);
           div(value);
       }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);




