import React from 'react';


class Numbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="numbers">
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
      </div>
    );
  }
}

export default Numbers;