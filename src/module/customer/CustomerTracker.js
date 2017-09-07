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
      let order;
      let timeline;
      if(this.state.orders.length > 0) {
        order = Object.keys(this.state.orders).reverse()[0];
      }

      if(order) {
        timeline = order.timeline;
      }
      let time1 = moment().subtract('3', 'hours');
      let time2 = moment().subtract('2', 'hours');
      let time3 = moment().subtract('1', 'hours');
      let time4 = moment();
      let format = 'h:mm:ss a';

        if(!timeline) {
          timeline = {};
          timeline[time1.format(format)] = "Accepted";
          timeline[time2.format(format)] = "Picking Up";
          timeline[time3.format(format)] = "Delivering";
          timeline[time4.format(format)] = "Complete";
        }

        const style = {
          padding: "10px 10px 10px 10px"
        };

        return (
            <div className="slds-grid slds-grid_vertical">
                <div className="slds-container_fluid" style={style}>
                </div>
                <div className="slds-container_fluid" style={style}>
                    <CustomerTimeline timeline={timeline}/>
                </div>
            </div>
        );
    }

}

CustomerTracker.contextTypes = {
    router: React.PropTypes.object
};

export default CustomerTracker;