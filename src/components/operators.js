import React from 'react';
import PropTypes from 'prop-types';


class Operators extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(sign) {
    this.props.handleClick(sign);
  }

  render() {
    return (
        <div className="operators">
            <button className="operator" onClick={ () => this.handleClick('divide') }>÷</button>
            <button className="operator" onClick={ () => this.handleClick('multiply') }>x</button>
            <button className="operator" onClick={ () => this.handleClick('substract') }>-</button>
            <button className="operator" onClick={ () => this.handleClick('add') }>+</button>
            <button className="operator" onClick={ () => this.handleClick('equal') }>=</button>
        </div>
    );
  }
}

Operators.propTypes = {
  next: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

export default Operators;