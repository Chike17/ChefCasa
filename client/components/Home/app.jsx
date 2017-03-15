import React from 'react';
import Navbar from './nav.jsx';
import Carousel from './carousel.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div >
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;