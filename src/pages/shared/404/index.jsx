'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Custom 404 Page</h1>
    );
  }
}

module.exports = NotFound;
