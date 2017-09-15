'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PageHeader = require('../shared/header/index.jsx');
const PageFooter = require('../shared/footer/index.jsx');
const img = require('../../img/trace-plate.jpg');

class About extends React.Component {
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
              <h1>Meet our team</h1>
            </div>
          </div>
        </div>
        <div className="desc-wrapper">
          <blockquote>
            Chef Angel Begaye is the Pastry Chef at TRACE. Begaye joins the TRACE team from fellow Starwood property The Phoenician in Scottsdale, AZ where she was with the Luxury Collection Resort for over seven years.

            Begaye graduated from Le Courdon Bleu in 2006. Honing her pastry skills during her tenure at The Phoenician, a 4 star 5 diamond resort, she demonstrated passion and enthusiasm as she quickly moved up the ranks of the acclaimed restaurant. While overseeing dessert production from fine dining to ice cream for four restaurants, banquets, catering events and weddings, she gained new expertise, becoming proficient in pastillage show pieces, chocolate and sugar work as well as specialty and wedding cakes, in addition to developing menus and focusing on community involvement. With a particular fondness for specialty desserts, wedding cakes and showpieces, Begaye planned and executed the grand holiday buffets as well as the annual gingerbread house.

            Giving her the ability to express her creativity and natural talent, Begaye assisted Chef Roy Pell in 2009 and 2011 at Coupe du Monde, one of the top worldwide competitions for pastry professionals, in the categories of Chocolate Showpiece and Ice Sculpture.

            Inspired by her family, she sites early experiences cooking with her grandmother as a foundation for her love of food. Begaye brings a renewed excitement about fine pastry to the already stellar TRACE team, adding her own creative touch while maintaining focus on well balanced flavors. In addition to overseeing all pastry production for the hotel’s in-room dining, banquets, and catering, she will also manage production of all wedding and specialty cakes for the W Austin.
          </blockquote>
          <blockquote>
            Chef James Zoller is the Chef de Cuisine at TRACE. Coming on board in 2010, Zoller has been with the TRACE team since the restaurant opened and has moved up through the ranks to oversee the culinary team in TRACE and W Austin’s Living Room.

            By way of Arizona, Zoller moved to Austin five years ago to be a part of the city’s burgeoning food scene. After graduating from Culinary School in 2007, he quickly jumped into the hospitality industry at Primo, which is owned by James Beard award winning Melissa Kelly and located at the JW Marriott in Tucson, AZ. There, he learned the discipline of working in a fast-paced kitchen environment, as well as a variety of new culinary techniques.

            Upon moving to Texas, Zoller cut his teeth in the Austin scene at Uchiko under James Beard award winner Tyson Cole, before taking a line cook position as with W Austin’s TRACE. Throughout his time at TRACE, he has not only sharpened his skills but also has grown into a seasoned chef and leader, shining in the collaborative, educational and team-oriented environment he’s helped build in the kitchen. As Chef de Cuisine, Zoller creatively develops seasonal specials featuring locally-sourced ingredients and signature menu items that he is personally passionate about, incorporating texture and full flavor profiles. With a passion for creating simple, rustic food, Zoller utilizes his experience spanning the country to tap into a range of culinary influences from Southwestern and Mediterranean to traditional Southern.
          </blockquote>
        </div>
        <PageFooter />
      </div>
    );
  }
}

module.exports = About;
