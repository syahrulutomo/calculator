import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <p className="result__text">{this.props.value}</p>
      </div>
    );
  }
}

Result.propTypes = {
  value: PropTypes.string.isRequired
}

export default Result;