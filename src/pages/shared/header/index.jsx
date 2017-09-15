'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const traceLogo = require('../../../img/trace.png');

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nav = [];

    // Add future links lowercase with hyphens
    ['about', 'menus', 'reservations', 'private-dining', 'events-calendar', 'location']
    .forEach((item) => {
      nav.push(<li><Link to={`/${item}`}>{item.replace('-', ' ')}</Link></li>);
    });

    return (
      <div className="header">
        <div className="row">
          <div className="col-md-4 left">
            <Link to="/">
              <img className="logo" src={traceLogo} />
            </Link>
          </div>
          <div className="col-md-8 right">
            <ul>
              {nav}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PageHeader;
