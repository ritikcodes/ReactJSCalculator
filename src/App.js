import React, { Component } from 'react';
import Calculator from './Calculator/Calculator';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <section className={this.props.themeName ? 'lightTheme' : 'darkTheme'}>
        <Calculator />
      </section>
    );
  }
}
const stateToProps = state => {
  return {
    themeName: state.lightTheme
  };
};
export default connect(stateToProps)(App);
