import React from 'react';

class OrderDetail extends React.Component {

    constructor() {

        super();
    }

    handleSubmit(event,key,isAssignedToMe) {

        event.preventDefault();

    }

    renderOrderDetail(key) {

        const order = this.props.orders[key];

    }

    render() {
        return <p>Hello from Order Detail</p>;
    }

}

export default OrderDetail;