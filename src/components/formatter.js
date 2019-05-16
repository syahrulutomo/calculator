import React from 'react';

class Formatter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="formatters">
          <button className="formatter">AC</button>
          <button className="formatter">+/-</button>
          <button className="formatter">%</button>
      </div>
    );
  }
}

export default Formatter;