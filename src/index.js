import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Customer from './module/customer/Customer';
import Technician from './module/technician/Technician';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Customer} />
                <Route exact path="/index.html" component={Customer} />
                <Route path="/customer" component={Customer} />
                <Route path="/technician" component={Technician} />
            </div>
        </BrowserRouter>
    )
} 

render(<Root/>, document.getElementById('root'));
