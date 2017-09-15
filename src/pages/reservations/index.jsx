'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PageHeader = require('../shared/header/index.jsx');
const PageFooter = require('../shared/footer/index.jsx');
const img = require('../../img/trace-table-long.jpg');

class Reservations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader />
        {/*Inline style below keeps parallaxEffect class independent of images*/}
        <div className="parallaxEffect" style={{backgroundImage: 'url(' + img + ')'}}>
          <div className="row">
            <div className="col-md-4 aboutPitch">
              <h1>Book a Table</h1>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="row">
            <div className="col-md-12 desc">
              <h3>FOR RESERVATIONS CALL (512) 542-3660</h3>
              <p>A journey for the avid culinary enthusiast, TRACE is an enriching and authentic experience of the senses, capturing the character and personality of the locale. Our cuisine with a conscience is foraged, farmed, crafted, hunted and shared utilizing the freshest, peak-of-the-season local and regional ingredients, supporting sustainable, renewable and organic food and beverage products.</p>
              <p><i>Open table integration somewhere below -></i></p>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

module.exports = Reservations;
