import React from 'react';
import WalmartLogo from './walmart.jpg';
import TargetLogo from './target.jpeg';

class OrderDetail extends React.Component {

    constructor() {

        super();



    }

    handleSubmit(event,key,isAssignedToMe) {

        event.preventDefault();



    }

    renderOrderDetail(key) {

        const order = this.props.orders[key];

        // default to walmart
        let logo = WalmartLogo;

        if( order.Retailer === 'Target' ) {
            logo = TargetLogo;
        }

        const expertName = this.props.expertName;




    }

    render() {
        
    }

}

export default OrderDetail;