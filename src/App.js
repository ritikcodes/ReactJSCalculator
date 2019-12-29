import React, { Component } from 'react';
import Calculator from './Calculator/Calculator';
import ThemeControl from './ThemeControl/ThemeControl';
class App extends Component {
  state = {
    lightTheme: 'true'
  };
  render() {
    //Function to change Theme Look
    const changeTheme = theme => {
      this.setState({ lightTheme: theme });
    };

    return (
      <section className={this.state.lightTheme ? 'lightTheme' : 'darkTheme'}>
        <ThemeControl changeTheme={changeTheme} />
        <Calculator />
      </section>
    );
  }
}

export default App;
