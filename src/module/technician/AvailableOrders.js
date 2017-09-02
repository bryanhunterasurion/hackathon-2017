import React from 'react';

class AvailableOrders extends React.Component {

    constructor() {

        super();

        this.renderOrder = this.renderOrder.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event,key) {

        event.preventDefault();

        this.props.acceptOrder(key);

    }

    renderOrder(key) {

        const order = this.props.orders[key];

        const hideOrderAccept = order.Status === 'Unavailable';

        if(order.Status === 'Available') {
            return (
                <li key={key}>
                    <form onSubmit={(event) => this.handleSubmit(event,key)}>
                        <label>
                            Customer Name: {order.CustomerName}
                        </label>
                        <br/>
                        <label>
                            Customer Address: {order.Address}
                        </label>
                        <br/>
                        <label>
                            Purchases: {order.Purchases}
                        </label>
                        <br/>
                        <label>
                            Pickup Address: {order.PickupAddress}
                        </label>
                        <br/>
                        <label>
                            Info: {order.Info}
                        </label>
                        <br/>
                        <label>
                            Status: {order.Status}
                        </label>
                        <br/>
                        <input type="submit" value="Accept Work" hidden={hideOrderAccept} />
                    </form>
                </li>
            );
        }
    }

    render() {
        return (
            <ul>
                {Object.keys(this.props.orders).map(this.renderOrder)}
            </ul>
        );
    }

}

export default AvailableOrders;