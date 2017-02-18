import React, { Component } from 'react'

import Nav from './Nav';
import Footer from './Footer';

class Main extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
