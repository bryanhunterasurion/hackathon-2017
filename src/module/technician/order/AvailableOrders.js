import React from 'react';
import WalmartLogo from './walmart.jpg';
import TargetLogo from './target.jpeg';

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

        // default to walmart
        let logo = WalmartLogo;

        if( order.Retailer === 'Target' ) {
            logo = TargetLogo;
        }

        if(order.Status === 'Available') {
            return (
                <li key={key} className="slds-feed__item">
                    <article className="slds-post">
                        <header className="slds-post__header slds-media">
                            <div className="slds-media__figure">
                                <a href="javascript:void(0);" className="slds-avatar slds-avatar_circle slds-avatar_large">
                                    <img src={logo} />
                                </a>
                            </div>
                            <div className="slds-media__body">
                                <div className="slds-grid slds-grid_align-spread slds-has-flexi-truncate">
                                    <p>
                                        <a href="javascript:void(0);">{order.CustomerName}</a>
                                    </p>
                                </div>
                                <p className="slds-text-body_small">
                                    <a href="javascript:void(0);" title="Click for single-item view of this post" className="slds-text-link_reset">
                                        {order.Address}
                                    </a>
                                </p>
                            </div>
                            <div className="slds-media__body">
                                <div className="slds-grid slds-grid_align-end">
                                    <button onClick={(event) => this.handleSubmit(event,key)} title="Like this item" className="slds-button_reset slds-post__footer-action" aria-pressed="false">
                                        <svg className="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle" aria-hidden="true">
                                            <use xlinkHref="symbols.svg#like"></use>
                                        </svg>
                                        Accept
                                    </button>
                                </div>
                            </div>
                        </header>
                        <div className="slds-post__content slds-text-longform">
                            <p>{order.Purchases}</p>
                        </div>
                        <footer className="slds-post__footer">
                        </footer>
                    </article>
                </li>
            );
        }
    }

    render() {
        return (
            <div className="slds-feed">
                <ul className="slds-feed__list">
                    {Object.keys(this.props.orders).map(this.renderOrder)}
                </ul>
            </div>
        );
    }

}

export default AvailableOrders;