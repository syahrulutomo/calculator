import React from 'react';

class Operators extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="operators">
            <button className="operator divide">÷</button>
            <button className="operator multiply">x</button>
            <button className="operator substract">-</button>
            <button className="operator add">+</button>
            <button className="operator equal">=</button>
        </div>
    );
  }
}

export default Operators;