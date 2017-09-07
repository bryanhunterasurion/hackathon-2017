import React from 'react';
import base from '../../base';
import orders from './sample-orders';

class LoadData extends React.Component {

    constructor() {

        super();

        this.state = {
            orders: {}
        };

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

    componentDidMount() {

        const action = this.props.match.params.action;

        if(action === 'load') {
            this.setState({orders});
        }
        else if(action === 'clear') {
            base.remove('orders');
        }

    }

    render() {

        return (
            <p>Executing...</p>
        );

    }

}

export default LoadData;