import React from 'react';
import base from '../../../base';
import TechnicianHeader from '../header/TechnicianHeader';

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

        const headerStyle = {
            height: '60px'
        };


        if(order == null){
            return <p>Loading.....</p>;
        }


        return (
            <div className="slds-grid slds-grid_vertical">
                <div className="slds-container_fluid" style={headerStyle}>
                    <TechnicianHeader/>
                </div>
                <div className="slds-container_fluid">
                    <div className="slds-panel__section">
                        <div className="slds-path-coach">
                            <div className="slds-grid">
                                <div className="slds-tabs_path" role="application">
                                    <ul className="slds-tabs_path__nav" role="listbox">
                                        <li className="slds-tabs_path__item slds-is-complete"
                                            role="presentation">
                                            <a aria-selected="false" className="slds-tabs_path__link"
                                               href="javascript:void(0);"
                                               id="path-2" role="option" tabIndex="-1">
                                                        <span className="slds-tabs_path__stage">
                                                            <svg className="slds-icon slds-icon_x-small"
                                                                 aria-hidden="true">
                                                            <use
                                                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"/>
                                                            </svg>
                                                            <span className="slds-assistive-text">Stage Complete</span>
                                                        </span>
                                                <span
                                                    className="slds-tabs_path__title">Picking Up</span>
                                            </a>
                                        </li>
                                        <li className="slds-tabs_path__item slds-is-current"
                                            role="presentation">
                                            <a aria-selected="true" className="slds-tabs_path__link"
                                               href="javascript:void(0);"
                                               id="path-3" role="option" tabIndex="0">
                                                        <span className="slds-tabs_path__stage">
                                                                <svg className="slds-icon slds-icon_x-small"
                                                                     aria-hidden="true">
                                                                <use
                                                                    xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"/>
                                                                </svg>
                                                                <span
                                                                    className="slds-assistive-text">Current Stage:</span>
                                                        </span>
                                                <span
                                                    className="slds-tabs_path__title">Delivering</span>
                                            </a>
                                        </li>
                                        <li className="slds-tabs_path__item slds-is-incomplete"
                                            role="presentation">
                                            <a aria-selected="false" className="slds-tabs_path__link"
                                               href="javascript:void(0);"
                                               id="path-4" role="option" tabIndex="-1">
                                                        <span className="slds-tabs_path__stage">
                                                          <svg className="slds-icon slds-icon_x-small"
                                                               aria-hidden="true">
                                                            <use
                                                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"/>
                                                              </svg>
                                                              </span>
                                                <span className="slds-tabs_path__title">Complete</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                        <div className="demo-only slds-grid" >
                            <div className="slds-panel slds-grid slds-grid_vertical slds-nowrap">
                                <div className="slds-form slds-form_stacked slds-grow slds-scrollable_y">

                                    <div className="slds-panel__section">
                                        <h3 className="slds-text-heading_small slds-m-bottom_medium">Order
                                            Details: {orderId}</h3>
                                        <ul>
                                            <li className="slds-form-element slds-hint-parent slds-border_bottom">
                                                <span className="slds-form-element__label">Customer Name</span>
                                                <div className="slds-form-element__control">
                                                    <span
                                                        className="slds-form-element__static">{order.CustomerName}</span>
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
                                                    <span
                                                        className="slds-form-element__static">{order.PickupAddress}</span>
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
                                        <span
                                            className="slds-form-element__static slds-text-longform">{order.Info}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>

            </div>
    );
    }

}

export default OrderDetail;