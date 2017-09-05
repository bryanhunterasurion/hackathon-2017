import React from 'react';
import base from '../../base';
import AvailableOrders from './order/AvailableOrders';
import TechnicianHeader from './header/TechnicianHeader';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class Technician extends React.Component {

    constructor() {

        super();

        this.acceptOrder = this.acceptOrder.bind(this);

        this.state = {
            orders: {}
        };

    }

    acceptOrder(key) {

        const orders = {...this.state.orders};

        orders[key] = {
            Status: "Unavailable",
            ExpertName: "Nick Choate"
        };

        this.setState({orders});

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
        }

        return (
            <div className="slds-grid slds-grid_vertical">
                <div className="slds-container_fluid" style={style}>
                    <TechnicianHeader/>
                </div>
                <div className="slds-container_fluid">
                    <AvailableOrders orders={this.state.orders}
                                     acceptOrder={this.acceptOrder}
                    />
                </div>
            </div>
        );
    }

}

export default Technician;