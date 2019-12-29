import React from 'react';

const DisplayScreen = props => (
  <>
    <input
      type='text'
      className='calculator-screen z-depth-1'
      value={props.result}
      disabled
    />
  </>
);

export default DisplayScreen;
