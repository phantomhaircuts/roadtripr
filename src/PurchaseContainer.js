import React, { Component } from 'react';
import Purchase from './Purchase'

class PurchaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <Purchase />
    )
  }
}
export default PurchaseContainer;
