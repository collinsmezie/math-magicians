import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class CalculatorInterface extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks(event) {
    const TargetValue = event.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, TargetValue));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="display">
          <h1>
            {total}

            {operation}

            {next}
          </h1>
        </div>
        <div className="btns">
          <div className="button-section">
            <button onClick={this.handleClicks} value="AC" className="button" type="button">AC</button>
            <button onClick={this.handleClicks} value="+/-" className="button" type="button">+/-</button>
            <button onClick={this.handleClicks} value="%" className="button" type="button">%</button>
            <button onClick={this.handleClicks} value="/" className="button operator" type="button">/</button>
            <button onClick={this.handleClicks} value="7" className="button" type="button">7</button>
            <button onClick={this.handleClicks} value="8" className="button" type="button">8</button>
            <button onClick={this.handleClicks} value="9" className="button" type="button">9</button>
            <button onClick={this.handleClicks} value="x" className="button operator" type="button">x</button>
            <button onClick={this.handleClicks} value="4" className="button" type="button">4</button>
            <button onClick={this.handleClicks} value="5" className="button" type="button">5</button>
            <button onClick={this.handleClicks} value="6" className="button" type="button">6</button>
            <button onClick={this.handleClicks} value="-" className="button operator" type="button">-</button>
            <button onClick={this.handleClicks} value="1" className="button" type="button">1</button>
            <button onClick={this.handleClicks} value="2" className="button" type="button">2</button>
            <button onClick={this.handleClicks} value="3" className="button" type="button">3</button>
            <button onClick={this.handleClicks} value="+" className="button operator" type="button">+</button>
          </div>
          <div className="bottom-row">
            <button onClick={this.handleClicks} value="0" className="button" type="button">0</button>
            <button onClick={this.handleClicks} value="." className="button" type="button">.</button>
            <button onClick={this.handleClicks} value="=" className="button operator" type="button">=</button>
          </div>
        </div>
      </div>

    );
  }
}
export default CalculatorInterface;
