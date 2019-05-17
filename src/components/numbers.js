import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.props.handleClick(value)
  }

  render() {
    return(
      <div className="numbers">
          <button className="number" onClick={ () => this.handleClick('7') }>7</button>
          <button className="number" onClick={ () => this.handleClick('8') }>8</button>
          <button className="number" onClick={ () => this.handleClick('9') }>9</button>
          <button className="number" onClick={ () => this.handleClick('4') }>4</button>
          <button className="number" onClick={ () => this.handleClick('5') }>5</button>
          <button className="number" onClick={ () => this.handleClick('6') }>6</button>
          <button className="number" onClick={ () => this.handleClick('1') }>1</button>
          <button className="number" onClick={ () => this.handleClick('2') }>2</button>
          <button className="number" onClick={ () => this.handleClick('3') }>3</button>
          <button className="zero" onClick={ () => this.handleClick('0') }>0</button>
          <button className="dot" onClick={ () => this.handleClick('.') }>.</button>
      </div>
    );
  }
}

Numbers.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Numbers;