import React, { Component } from 'react';
import DisplayScreen from '../DisplayScreen/DisplayScreen';
import Controls from '../Controls/Controls';

class Calculator extends Component {
  render() {
    return (
      <div className='calculator card'>
        <DisplayScreen />
        <Controls />
      </div>
    );
  }
}

export default Calculator;
