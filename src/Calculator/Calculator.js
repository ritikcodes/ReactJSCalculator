import React, { Component } from 'react';
import DisplayScreen from '../DisplayScreen/DisplayScreen';
import Controls from '../Controls/Controls';

class Calculator extends Component {
  state = {
    result: '',
    operand: '',
    background: '',
    lastNumber: '' //for more than one digit Number
  };

  render() {
    //Function to be run when Number is Pressed
    const numberPressed = event => {
      const number = event.target.value;
      const currentNumber = this.state.lastNumber + number;
      this.setState({
        result: currentNumber,
        lastNumber: currentNumber
      });
    };

    //Function to be run when Operand is Pressed
    const operandPressed = event => {
      var operand = event.target.value;
      var oldBackground = this.state.background;
      var oldOperand = this.state.operand;
      var oldResult = this.state.result;
      var newResult = eval(oldBackground + oldOperand + oldResult);

      this.setState({
        result: newResult,
        operand: operand,
        background: newResult,
        lastNumber: ''
      });
    };

    //Function to clear Display
    const clearResult = () => {
      this.setState({
        result: '',
        operand: '',
        background: '',
        lastNumber: ''
      });
    };

    //Function to output final Result
    const finalResult = () => {
      var result = this.state.result;
      var oldBackground = this.state.background;
      var oldOperand = this.state.operand;
      var newResult = eval(oldBackground + oldOperand + result);

      this.setState({
        result: newResult,
        operand: '',
        background: '',
        lastNumber: ''
      });
    };
    return (
      <div className='calculator card'>
        <DisplayScreen result={this.state.result} />
        <Controls
          numClick={numberPressed}
          opeClick={operandPressed}
          clearResult={clearResult}
          finalResult={finalResult}
        />
      </div>
    );
  }
}

export default Calculator;
