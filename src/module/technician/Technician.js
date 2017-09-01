import React from 'react';
import base from '../../base';
import AvailableOrders from './AvailableOrders';

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
        return (
            <div>
                Technician App
                <AvailableOrders orders={this.state.orders}
                                 acceptOrder={this.acceptOrder}
                />
            </div>
        );
    }

}

export default Technician;