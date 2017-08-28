import React from 'react';

class AvailableOrders extends React.Component {

    constructor() {

        super();

        this.renderOrder = this.renderOrder.bind(this);

    }

    renderOrder(key) {

        const order = this.props.orders[key];

        return (
            <div>
                Order: {order.name}
            </div>
        );

    }

    render() {
        return (
            <div>
                {Object.keys(this.props.orders).map(this.renderOrder)}
            </div>
        );
    }

}

export default AvailableOrders;