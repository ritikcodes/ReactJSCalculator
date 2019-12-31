import React from 'react';
import { connect } from 'react-redux';
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
const stateToProps = state => {
  return { result: state.result };
};
export default connect(stateToProps)(DisplayScreen);
