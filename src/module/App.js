import React from 'react';
import { Route } from 'react-router-dom';
import Customer from './customer/Customer';
import CustomerCheckout from './customer/CustomerCheckout';
import Technician from './technician/Technician';
import TechnicianOrderDetail from './technician/orderDetail/OrderDetail';
import base from '../base';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            customerView: {},
            technicianView: {}
        };

        this.setViewState = this.setViewState.bind(this);

    }

    setViewState(location) {

        if( location.includes('technician') ) {

            const technicianView = {...this.state.technicianView};

            technicianView.location = location;

            this.setState({technicianView})

        }
        else {

            const customerView = {...this.state.customerView};

            customerView.location = location;

            this.setState({customerView})

        }

    }

    componentWillMount() {

        this.customerView = base.syncState('customerView', {
            context: this,
            state: 'customerView'
        });

        this.technicianView = base.syncState('technicianView', {
            context: this,
            state: 'technicianView'
        });

        this.setViewState(this.context.router.route.location.pathname);

        this.context.router.history.listen( (location, action) => {
            this.setViewState(location.pathname);
        });

    }

    componentWillUnmount() {
        base.removeBinding(this.customerView);
        base.removeBinding(this.technicianView);
    }

    componentDidUpdate() {

        const currentLocation = this.context.router.route.location.pathname;

        if(currentLocation.includes("technician")) {

            const technicianViewLocation = this.state.technicianView.location;

            if(currentLocation != technicianViewLocation && technicianViewLocation !== undefined) {
                // this.context.router.history.push(technicianViewLocation);
            }
        }
        else {

            const customerViewLocation = this.state.customerView.location;

            if(currentLocation != customerViewLocation && customerViewLocation !== undefined) {
                // this.context.router.history.push(customerViewLocation);
            }

        }

    }

    render() {
        return (
            <div>
                <Route exact path="/" component={Customer} />
                <Route exact path="/index.html" component={Customer} />
                <Route path="/customer" component={Customer} />
                <Route path="/customerCheckout" component={CustomerCheckout} />
                <Route exact path="/technician/orders" component={Technician} />
                <Route path="/technician/orders/:orderId" component={TechnicianOrderDetail} />
            </div>
        )
    }

}

App.contextTypes = {
    router: React.PropTypes.object
};

export default App;
