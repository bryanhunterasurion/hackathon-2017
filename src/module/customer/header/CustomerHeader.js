import React from 'react';
import Avatar from '@salesforce-ux/design-system/assets/images/avatar3.jpg';
import Logo from './walmart.png';

class CustomerHeader extends React.Component {

    render() {
        return (
            <header className="slds-global-header_container">
                <div className="slds-global-header slds-grid slds-grid_align-spread">
                    <div className="slds-global-header__item">
                        <div className="slds-global-header__logo">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <ul className="slds-global-header__item slds-grid slds-grid_vertical-align-center">
                        <li className="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small">
                            <button className="slds-button" title="person name" aria-haspopup="true">
                                <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
                                    <img src={Avatar} />
                                </span>
                            </button>
                        </li>
                        </ul>
                    </div>
            </header>
        );
    }

}

export default CustomerHeader;