import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ColorBox from './boxColor'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <tr class="box">
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
            <td><ColorBox /></td>
          </tr>
        </header>
      </div>
    );
  }
}

export default App;
