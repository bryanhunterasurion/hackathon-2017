import React from 'react';
import base from '../../../base';

class OrderDetail extends React.Component {

    constructor() {

        super();

        this.state = {
            orders: {}
        };
    }

    handleSubmit(event,key,isAssignedToMe) {

        event.preventDefault();

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

        const orderId =this.props.match.params.orderId;

        const order = this.state.orders[orderId];
        //style="height: 845px; max-width: 420px; background: rgb(244, 246, 249); padding: 1rem;">
        const style = {
            height: '845px',
            'max-width': '420px',
            background: 'rgb(244,246,249)',
            padding: '1rem'
        };


        {style}
        if(order == null){
            return <p>Loading.....</p>;
        }


        return (

            <div className="demo-only slds-grid" style={style}>
                <div className="slds-panel slds-grid slds-grid_vertical slds-nowrap">
                    <div className="slds-form slds-form_stacked slds-grow slds-scrollable_y">

                        <div className="slds-panel__section">
                            <h3 className="slds-text-heading_small slds-m-bottom_medium">Order Details: {orderId}</h3>
                            <ul>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Customer Name</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static">{order.CustomerName}</span>
                                    </div>
                                </li>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Order Date</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static">{order.OrderDate}</span>
                                    </div>
                                </li>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Pickup Address</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static">{order.PickupAddress}</span>
                                    </div>
                                </li>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Customer Address</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static">{order.Address}r</span>
                                    </div>
                                </li>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Purchases</span>
                                    <div className="slds-form-element__control">
                                        <span
                                            className="slds-form-element__static">{order.Purchases}</span>
                                    </div>
                                </li>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Info</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static slds-text-longform">{order.Info}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="slds-panel__section">
                            <h3 className="slds-text-heading_small slds-m-bottom_medium">Additional Information</h3>
                            <ul>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Status</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static">Not Started</span>
                                    </div>
                                </li>
                                <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                    <span className="slds-form-element__label">Priority</span>
                                    <div className="slds-form-element__control">
                                        <span className="slds-form-element__static">Normal</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
    }

}

export default OrderDetail;