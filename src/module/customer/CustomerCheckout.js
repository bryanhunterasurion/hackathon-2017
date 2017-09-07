import React from 'react';
import base from '../../base';
import CustomerHeader from './header/CustomerHeader';
import CheckoutScreen from './checkout_walmart.png';

class CustomerCheckout extends React.Component {

  constructor() {

    super();

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState({}, () => {
      this.context.router.history.push(`/customer`);
    });

  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

 render() {

    const style = {
      position: 'absolute',
      top: '110px',
      height: '65px',
      backgroundColor: 'white',
      width: '352px',
      'margin': '0 12px 0 12px',
      'padding': '20px 20px 20px 20px',
      border: '1px solid #ccc',
      borderRadius: '5px'
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

CustomerCheckout.contextTypes = {
  router: React.PropTypes.object
};

export default CustomerCheckout;
