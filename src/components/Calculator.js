import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';
import Display from './display';

const CalculatorInterface = () => {
  const [state, updateState] = useState({ total: 0, next: null, operation: null });

  const handleClicks = (e) => {
    const TargetValue = e.target.value;
    updateState(calculate(state, TargetValue));
  };
  const { total, next, operation } = state;
  return (
    <div className="container">
      <Display total={total} operation={operation} next={next} />
      <div className="btns">
        <div className="button-section">
          <button onClick={handleClicks} value="AC" className="button" type="button">AC</button>
          <button onClick={handleClicks} value="+/-" className="button" type="button">+/-</button>
          <button onClick={handleClicks} value="%" className="button" type="button">%</button>
          <button onClick={handleClicks} value="÷" className="button operator" type="button">÷</button>
          <button onClick={handleClicks} value="7" className="button" type="button">7</button>
          <button onClick={handleClicks} value="8" className="button" type="button">8</button>
          <button onClick={handleClicks} value="9" className="button" type="button">9</button>
          <button onClick={handleClicks} value="x" className="button operator" type="button">x</button>
          <button onClick={handleClicks} value="4" className="button" type="button">4</button>
          <button onClick={handleClicks} value="5" className="button" type="button">5</button>
          <button onClick={handleClicks} value="6" className="button" type="button">6</button>
          <button onClick={handleClicks} value="-" className="button operator" type="button">-</button>
          <button onClick={handleClicks} value="1" className="button" type="button">1</button>
          <button onClick={handleClicks} value="2" className="button" type="button">2</button>
          <button onClick={handleClicks} value="3" className="button" type="button">3</button>
          <button onClick={handleClicks} value="+" className="button operator" type="button">+</button>
        </div>
        <div className="bottom-row">
          <button onClick={handleClicks} value="0" className="button" type="button">0</button>
          <button onClick={handleClicks} value="." className="button" type="button">.</button>
          <button onClick={handleClicks} value="=" className="button operator" type="button">=</button>
        </div>
      </div>
    </div>

  );
};
export default CalculatorInterface;
