import React from 'react';
import base from '../../base';

class Customer extends React.Component {

  constructor() {

      super();

      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
          orders: {}
      };

  }

  handleSubmit(event) {

    event.preventDefault();

    const orders = {...this.state.orders};

    orders[Math.floor(Math.random() * 20)] = {
        CustomerName: this.name.value,
        Address: this.address.value,
        Purchases: 'LG 75" Class SJ8570-Series - 4K Ultra HD, Smart, LED TV - 2160p, 120Hz',
        PickupAddress: 'Walmart, 2421 Powell Ave, Nashville, TN 37204',
        Info: this.info.value,
        Status: 'Available'
    };

    this.setState({orders});

    alert('order placed');
  }

  componentWillMount() {

      this.ref = base.syncState('orders', {
          context: this,
          state: 'orders'
      });

  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        Customer App
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Name"/>
          <br/>
          <input ref={(input) => this.address = input} type="text" placeholder="Address"/>
          <br/>
          <input ref={(input) => this.info = input} type="text" placeholder="Additional Information"/>
          <br/>
          <input type="submit" value="Request Expert"/>
        </form>
      </div>
    );
  }
}

export default Customer;
