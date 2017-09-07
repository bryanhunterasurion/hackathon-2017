import React from 'react';
import base from '../../base';
import CustomerTimeline from './CustomerTimeline';
// import TechnicianHeader from './header/TechnicianHeader';
import moment from 'moment';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class CustomerTracker extends React.Component {

    constructor() {

        super();

        this.state = {
            orders: {}
        };

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
      let timeline;
      let order;
      let orderKey = Object.keys(this.state.orders).reverse()[0];

      if(orderKey) {
        order = this.state.orders[orderKey];
        // order = this.state.orders["1504809420"];
        timeline = order.Timeline;
      }

      if(!timeline) {
        timeline = {};
        let time1 = moment().subtract('3', 'hours').unix();
        let time2 = moment().subtract('2', 'hours').unix();
        let time3 = moment().subtract('1', 'hours').unix();
        let time4 = moment().unix();

        timeline["Accepted"] = time1;
        timeline["Picking Up"] = time2;
        timeline["Delivering"] = time3;
        timeline["Complete"] = time4;
      }

      order = order || {};

      order.Timeline = timeline;

      const style = {
        padding: "10px 10px 10px 10px"
      };

      return (
          <div className="slds-grid slds-grid_vertical">
              <div className="slds-container_fluid" style={style}>
              </div>
              <div className="slds-container_fluid" style={style}>
                  <CustomerTimeline order={order}/>
              </div>
          </div>
      );
    }

}

CustomerTracker.contextTypes = {
    router: React.PropTypes.object
};

export default CustomerTracker;