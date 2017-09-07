import React from 'react';
import base from '../../base';
import CustomerHeader from './header/CustomerHeader';
import Checkbox from './checkbox.png';

class CustomerCheckout extends React.Component {

  constructor() {

    super();

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {

    event.preventDefault();

  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

 render() {

    const style = {
      height: '60px'
    }

    const successStyle = {
      padding: '10px',
      textAlign: 'center'
    }

    const messageStyle = {
      fontSize: '18px'
    }

    return (
      <div className="slds-grid slds-grid_vertical">
          <div className="slds-container_fluid" style={style}>
              <CustomerHeader/>
          </div>
          <div className="slds-container_fluid" style={successStyle}>
            <img src={Checkbox} alt="" />
            <p>Confirmation #23750237609<p/></p> <br/>
          </div>
      </div>
    );
  }
}

CustomerCheckout.contextTypes = {
  router: React.PropTypes.object
};

export default CustomerCheckout;
