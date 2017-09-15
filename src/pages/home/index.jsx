'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PageHeader = require('../shared/header/index.jsx');
const PageFooter = require('../shared/footer/index.jsx');
const openTableImg = require('../../img/DC_Widget_US_2017_hor.png');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DOMloaded: false
    }
  }

  componentDidMount() {
    this.setState({
      DOMloaded: true
    })
  }

  scrollMiddle() {
    var scrollCoords = document.querySelector('.desc-wrapper').offsetTop + 15;

    var i = window.scrollY;
    var int = setInterval(() => {
      window.scrollTo(0, i);
      i += 10;
      if (i >= scrollCoords) {
        clearInterval(int);
      }
    }, 10);
  }

  scrollTop() {
    var i = window.scrollY;
    var int = setInterval(() => {
      window.scrollTo(0, i);
      i -= 10;
      if (i <= 0) {
        clearInterval(int);
      }
    }, 10);
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div className="parallax">
          <div className="thePitch">
            <div className="theTitle">
              <h1>foraged, farmed, crafted</h1>
            </div>
            <div className="theDets">
              <p>Summer Special, Purchase a Brunch entree at TRACE and get complimentary entry to Soundwave on Sundays. Show receipt upon WET entry. *Limited availability, entry not guaranteed.</p>
              <p>$1 Oysters <br/> Every Friday during Happy Hour from 5-7 PM. Pair with a glass of bubbly.</p>
              <p>$1 Mimosas <br/> Grab the crew and sip on $1 mimosas during Brunch on Saturday or Sunday from 11AM-3PM. </p>
              <p>Lunchtime on 2nd Street <br/> In a hurry? Our Lunch on the Fly offers an entree, side and cookies to-go just for $12.</p>
            </div>
          </div>
          <div className="bottom">
            <a><span className="down-button glyphicon glyphicon-chevron-down" aria-hidden="true" onClick={this.scrollMiddle}></span></a>
          </div>
        </div>
        <div className="desc-wrapper">
          <div className="description">
            <div className="row">
              <div className="col-md-12 desc">
                <p>TRACE Austin is a sleek and sophisticated restaurant featuring the finest flavors of Central Texas sourced directly from the region's surrounding farms. We invite you to experience our downtown Austin restaurant featuring ever-changing medleys of Texas cuisine, artisan cheeses and heritage meats from the finest and freshest seasonal fare.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 media1">
                <img src={openTableImg} />
              </div>
              <div className="col-md-6 media2">
                <iframe src="https://player.vimeo.com/video/85177776" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="toTop">
            <a><span className="down-button glyphicon glyphicon-chevron-up" aria-hidden="true" onClick={this.scrollTop}></span></a>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

module.exports = Home;
