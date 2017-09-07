import React from 'react';
import base from '../../base';
import CustomerHeader from './header/CustomerHeader';
import CheckoutScreen from './checkout_walmart.png';

class CustomerCheckout extends React.Component {

  constructor() {

    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      orders: {}
    };

  }

  handleSubmit(event) {

    event.preventDefault();

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

    const style = {
      position: 'absolute',
      top: '110px',
      height: '65px',
      'background-color': 'white',
      width: '352px',
      'margin': '0 12px 0 12px',
      'padding': '20px 20px 20px 20px',
      border: '1px solid #ccc',
      'border-radius': '5px'
    };

    return (
      <div className="slds-grid slds-grid_vertical">
        <img src={CheckoutScreen} alt="" />
        <div class="checkout-options" style={style}>
          <form>
            <button onClick={(event) => this.handleSubmit(event)} className="slds-button slds-button_brand">Shipping</button>
            <button onClick={(event) => this.handleSubmit(event)} className="slds-button slds-button_brand">Pickup Free</button>
            <button onClick={(event) => this.handleSubmit(event)} className="slds-button slds-button_brand">Request Expert</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomerCheckout;
