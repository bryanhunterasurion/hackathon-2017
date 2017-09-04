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

    const orders = { ...this.state.orders };

    orders[Math.floor(Math.random() * 20)] = {
      CustomerName: this.name.value,
      Address: this.address.value,
      Purchases: 'LG 75" Class SJ8570-Series - 4K Ultra HD, Smart, LED TV - 2160p, 120Hz',
      PickupAddress: 'Walmart, 2421 Powell Ave, Nashville, TN 37204',
      Info: this.info.value,
      Status: 'Available'
    };

    this.setState({ orders });

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
        <div className="checkout-header">
          <span>
            <img src="//ec-us-i5.wal.co/dfw/63fd9f59-5295/bdbd110b-3295-4a4e-8b65-ba1b26003930/v1/7ed92d4e1be4125f2856cc9694583e4b.png" alt="Walmart logo" />
            <span className="checkout-header-checkout-text">Checkout</span>
          </span>
        </div>
        <br />
        <form onSubmit={(event) => this.handleSubmit(event)} className="customer-form">
          <input ref={(input) => this.name = input} type="text" placeholder="Name" />
          <br />
          <input ref={(input) => this.address = input} type="text" placeholder="Address" />
          <br />
          <input ref={(input) => this.info = input} type="text" placeholder="Additional Information" />
          <br />
          <input type="submit" value="Request Expert" />
        </form>
        <footer className="checkout-footer">
          <div>
            <span>© 2017 Walmart Stores, Inc.</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Customer;
