import React from 'react';

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

export default Operators;