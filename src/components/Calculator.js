import React from 'react';
import './Calculator.css';

class CalculatorInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="container">
        <div className="display" />
        <div className="btns">
          <div className="button-section">
            <button className="button" type="button">AC</button>
            <button className="button" type="button">+/-</button>
            <button className="button" type="button">%</button>
            <button className="button operator" type="button">/</button>
            <button className="button" type="button">7</button>
            <button className="button" type="button">8</button>
            <button className="button" type="button">9</button>
            <button className="button operator" type="button">x</button>
            <button className="button" type="button">4</button>
            <button className="button" type="button">5</button>
            <button className="button" type="button">6</button>
            <button className="button operator" type="button">-</button>
            <button className="button" type="button">1</button>
            <button className="button" type="button">2</button>
            <button className="button" type="button">3</button>
            <button className="button operator" type="button">+</button>
          </div>
          <div className="bottom-row">
            <button className="button" type="button" id="zero">0</button>
            <button className="button" type="button">.</button>
            <button className="button operator" type="button">=</button>
          </div>
        </div>
      </div>

    );
  }
}

export default CalculatorInterface;
