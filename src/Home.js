import React, { Component } from 'react';
import NavContainer from './NavContainer';
import User from './User'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavContainer />
        <User />
      </div>
    );
  }
}

export default Home;
