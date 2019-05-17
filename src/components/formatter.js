import React from 'react';
import PropTypes from 'prop-types';

class Formatter extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(sign){
    this.props.handleClick(sign);
  }

  render() {
    return(
      <div className="formatters">
          <button className="formatter" onClick={ () => this.handleClick('AC') }>AC</button>
          <button className="formatter" onClick={ () => this.handleClick('plusmin') }>+/-</button>
          <button className="formatter" onClick={ () => this.handleClick('percent') }>%</button>
      </div>
    );
  }
}

Formatter.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Formatter;