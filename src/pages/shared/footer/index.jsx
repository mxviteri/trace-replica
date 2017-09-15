'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const traceLogo = require('../../../img/trace.png');

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-md-3">
            <h2>Location</h2>
            <p>TRACE Austin<br/>
              200 Lavaca Street<br/>
              Austin, TX 78701<br/>
              512-542-3660</p>
          </div>
          <div className="col-md-3">
            <h2>Hours</h2>
            <p>Breakfast<br/>
            Mon-Fri: 6:30am - 11am<br/>
            Sat-Sun: 7:30am - 10:30am</p>

            <p>Lunch<br/>
            Mon-Fri  11:00am - 3:00pm</p>

            <p>Dinner<br/>
            Mon-Thu:  5:30pm - 10pm<br/>
            Fri-Sat:  5:30pm - 11pm</p>

            <p>Brunch<br/>
            Sat & Sun: 10:30am - 3pm</p>

            <p>Happy Hour<br/>
            Mon-Fri: 5pm - 7pm</p>
          </div>
          <div className="col-md-3">
            <h2>Updates</h2>
            <p>Sign-up for updates from TRACE</p>
          </div>
          <div className="col-md-3">
            <h2>Media</h2>
            <p>Sample social media information</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PageFooter;
