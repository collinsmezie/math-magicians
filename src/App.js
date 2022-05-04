import React from 'react';
import CalculatorInterface from './components/Calculator';
import './App.css';

/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <CalculatorInterface />
      </div>

    );
  }
}

export default App;
