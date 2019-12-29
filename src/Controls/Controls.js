import React from 'react';

const Controls = props => (
  <div className='calculator-keys'>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='+'
      onClick={props.opeClick}
    >
      +
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='-'
      onClick={props.opeClick}
    >
      -
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='*'
      onClick={props.opeClick}
    >
      *
    </button>
    <button
      type='button'
      className='btn btn-light waves-effect'
      value='/'
      onClick={props.opeClick}
    >
      /
    </button>

    <button
      type='button'
      value='7'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      7
    </button>
    <button
      type='button'
      value='8'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      8
    </button>
    <button
      type='button'
      value='9'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      9
    </button>

    <button
      type='button'
      value='4'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      4
    </button>
    <button
      type='button'
      value='5'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      5
    </button>
    <button
      type='button'
      value='6'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      6
    </button>

    <button
      type='button'
      value='1'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      1
    </button>
    <button
      type='button'
      value='2'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      2
    </button>
    <button
      type='button'
      value='3'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      3
    </button>

    <button
      type='button'
      value='0'
      className='btn btn-light waves-effect'
      onClick={props.numClick}
    >
      0
    </button>

    <button
      type='button'
      className='btn btn-light waves-effect'
      value='all-clear'
      onClick={props.clearResult}
    >
      Clear
    </button>

    <button
      type='button'
      className='equal-sign operator btn btn-default'
      value='='
      onClick={props.finalResult}
    >
      =
    </button>
  </div>
);

export default Controls;
