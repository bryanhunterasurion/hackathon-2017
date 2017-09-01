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

        return (
            <li key={key}>
                <form onSubmit={(event) => this.handleSubmit(event,key)}>
                    <label>
                        Customer Name: {order.CustomerName}
                    </label>
                    <br/>
                    <label>
                        Status: {order.Status}
                    </label>
                    <br/>
                    <input type="submit" value="Accept" hidden={hideOrderAccept} />
                </form>
            </li>
        );

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