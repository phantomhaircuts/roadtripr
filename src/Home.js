import React, { Component } from 'react';
import NavContainer from './NavContainer';
import PurchaseContainer from './PurchaseContainer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavContainer />
        <PurchaseContainer />
      </div>
    );
  }
}

export default Home;
