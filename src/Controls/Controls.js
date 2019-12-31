import React from 'react';
import { connect } from 'react-redux';

const Controls = props => (
  <div className='calculator-keys'>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='+'
      onClick={event => {
        props.addOperand(event.target.value);
      }}
    >
      +
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='-'
      onClick={event => {
        props.addOperand(event.target.value);
      }}
    >
      -
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='*'
      onClick={event => {
        props.addOperand(event.target.value);
      }}
    >
      *
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='/'
      onClick={event => {
        props.addOperand(event.target.value);
      }}
    >
      /
    </button>

    <button
      type='button'
      value='7'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      7
    </button>
    <button
      type='button'
      value='8'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      8
    </button>
    <button
      type='button'
      value='9'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      9
    </button>

    <button
      type='button'
      value='4'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      4
    </button>
    <button
      type='button'
      value='5'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      5
    </button>
    <button
      type='button'
      value='6'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      6
    </button>

    <button
      type='button'
      value='1'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      1
    </button>
    <button
      type='button'
      value='2'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      2
    </button>
    <button
      type='button'
      value='3'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      3
    </button>

    <button
      type='button'
      value='0'
      className='btn btn-light waves-effect'
      onClick={event => {
        props.addNumber(event.target.value);
      }}
    >
      0
    </button>

    <button
      type='button'
      className='btn btn-light waves-effect'
      value='all-clear'
      onClick={event => {
        props.clearResult();
      }}
    >
      Clear
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='all-clear'
      onClick={event => {
        props.changeTheme();
      }}
    >
      {props.themeName ? 'Dark Theme' : 'Light Theme'}
    </button>

    <button
      type='button'
      className='equal-sign operator btn btn-default'
      value='='
      onClick={event => {
        props.showResult();
      }}
    >
      =
    </button>
  </div>
);

const stateToProps = state => {
  return {
    themeName: state.lightTheme
  };
};

const dispatchtoProps = dispatch => {
  return {
    addOperand: operand => dispatch({ type: 'ADD_OPERAND', val: operand }),
    addNumber: number => dispatch({ type: 'ADD_NUMBER', val: number }),
    clearResult: () => dispatch({ type: 'CLEAR_RESULT' }),
    showResult: () => dispatch({ type: 'SHOW_RESULT' }),
    changeTheme: () => dispatch({ type: 'CHANGE_THEME' })
  };
};

export default connect(stateToProps, dispatchtoProps)(Controls);
