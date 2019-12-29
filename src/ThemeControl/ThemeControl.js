import React, { Component } from 'react';

export class ThemeControl extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button
          type='button'
          className='btn btn-lg btn-light'
          onClick={() => {
            this.props.changeTheme(true);
          }}
        >
          Light Theme
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type='button'
          className='btn btn-lg btn-dark'
          onClick={() => {
            this.props.changeTheme(false);
          }}
        >
          Dark Theme
        </button>
      </div>
    );
  }
}

export default ThemeControl;
