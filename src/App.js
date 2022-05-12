import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorInterface from './components/Calculator';
import './App.css';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Home from './components/Home';

/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<CalculatorInterface />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </div>

    );
  }
}

export default App;
