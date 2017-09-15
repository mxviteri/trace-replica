'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Not today.. Satan!</h1>
    );
  }
}

module.exports = NotFound;
