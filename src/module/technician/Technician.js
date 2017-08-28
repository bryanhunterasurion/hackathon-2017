import React from 'react';
import base from '../../base';
import AvailableOrders from './AvailableOrders';

class Technician extends React.Component {

    constructor() {

        super();

        this.respondToOrder = this.respondToOrder.bind(this);

        this.state = {
            orders: {}
        };

    }

    respondToOrder(key) {

        const orders = {...this.state.orders};

        orders[key] = {
            name: `Testing ${orders.name}`,
            requestedDeliveryTime: Date.now()
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
                                 respondToOrder={this.respondToOrder}
                />
            </div>
        );
    }

}

export default Technician;