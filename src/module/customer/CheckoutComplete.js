import React from 'react';
import base from '../../base';
import CustomerHeader from './header/CustomerHeader';

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

    return (
      <div className="slds-grid slds-grid_vertical">
        <CustomerHeader/>
      </div>
    );
  }
}

CustomerCheckout.contextTypes = {
  router: React.PropTypes.object
};

export default CustomerCheckout;
