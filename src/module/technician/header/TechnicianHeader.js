import React from 'react';
import Avatar from '@salesforce-ux/design-system/assets/images/avatar2.jpg';
import Logo from './soluto-logo.png';

class TechnicianHeader extends React.Component {

    constructor() {

        super();

        this.goToAvailableOrders = this.goToAvailableOrders.bind(this);

    }

    goToAvailableOrders() {
        this.context.router.history.push('/technician/orders');
    }

    render() {
        return (
            <header className="slds-global-header_container">
                <div className="slds-global-header slds-grid slds-grid_align-spread">
                    <div className="slds-global-header__item">
                        <div className="slds-global-header__logo">
                            <img src={Logo} alt=""/>
                        </div>
                    </div>
                    <ul className="slds-global-header__item slds-grid slds-grid_vertical-align-center">
                        <li className="slds-dropdown-trigger slds-dropdown-trigger_click">
                            <button onClick={this.goToAvailableOrders} className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon" title="Notifications">
                                <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                                    <use xlinkHref="/symbols.svg#work_order_type"></use>
                                </svg>
                                <span className="slds-assistive-text">Available Orders</span>
                            </button>
                        </li>
                        <li className="slds-dropdown-trigger slds-dropdown-trigger_click">
                            <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon" title="Notifications">
                                <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                                    <use xlinkHref="/symbols.svg#notification"></use>
                                </svg>
                                <span className="slds-assistive-text">Notifications</span>
                            </button>
                        </li>
                        <li className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small">
                            <button className="slds-button" title="person name" aria-haspopup="true">
                                  <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
                                    <img src={Avatar} alt="Expert" />
                                  </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }

}

TechnicianHeader.contextTypes = {
    router: React.PropTypes.object
};


export default TechnicianHeader;