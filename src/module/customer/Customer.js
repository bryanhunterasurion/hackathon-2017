import React from 'react';
import base from '../../base';
import CustomerHeader from './header/CustomerHeader';

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

    orders[Math.floor(Math.random() * 10000)] = {
      CustomerName: this.name.value,
      Address: this.address.value,
      Purchases: this.purchases.value,
      PickupAddress: this.pickupAddress.value,
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

    const style = {
      height: '60px'
    };

    const formStyle = {
      padding: '10px'
    };

    return (
      <div className="slds-grid slds-grid_vertical">
        <div className="slds-container_fluid" style={style}>
            <CustomerHeader/>
        </div>
        <div className="slds-container_fluid">
           <div className="slds-form slds-form_stacked" style={formStyle}>
              <b>Home Expert Confirmation</b><br/>
              <div className="slds-form-element">
                <label class="slds-form-element__label" for="input-id-01">Name</label>
                <div className="slds-form-element__control">
                  <input value="Barry Vandevier" ref={(input) => this.name = input} type="text" id="input-id-01" className="slds-input" placeholder="Customer Name" />
                </div>
              </div>
              <div className="slds-form-element">
                <label class="slds-form-element__label" for="input-id-01">Address</label>
                <div className="slds-form-element__control">
                  <input value="300 2nd Ave S, Nashville, TN 37201" ref={(input) => this.address = input} type="text" id="input-id-01" className="slds-input" placeholder="Customer Address" />
                </div>
              </div>
              <label class="slds-form-element__label" for="input-id-01">Purchases</label>
              <div className="slds-form-element">
                <div className="slds-form-element__control">
                  <input value='LG 75" Class SJ8570-Series - 4K Ultra HD, Smart, LED TV - 2160p, 120Hz' ref={(input) => this.purchases = input} type="text" id="input-id-01" className="slds-input" placeholder="Customer Address" />
                </div>
              </div>
              <label class="slds-form-element__label" for="input-id-01">Pickup Address</label>
              <div className="slds-form-element">
                <div className="slds-form-element__control">
                  <input value='Walmart, 2421 Powell Ave, Nashville, TN 37204' ref={(input) => this.pickupAddress = input} type="text" id="input-id-01" className="slds-input" placeholder="Customer Address" />
                </div>
              </div>
              <label class="slds-form-element__label" for="input-id-01">Delivery Time</label>
              <div className="slds-form-element">
                <div className="slds-form-element__control">
                  <input value="Now" type="text" id="input-id-01" className="slds-input" placeholder="Delivery Time" />
                </div>
              </div>
              <label class="slds-form-element__label" for="input-id-01">Additional Information</label>
              <div className="slds-form-element">
                <div className="slds-form-element__control">
                  <input ref={(input) => this.info = input} type="text" id="input-id-01" className="slds-input" placeholder="Additional Information" />
                </div>
              </div>
              <div className="slds-form-element">
                <button onClick={(event) => this.handleSubmit(event)} className="slds-button slds-button_brand">Request Home Expert</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Customer;
