import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Customer from './Customer';
import Technician from './Technician';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Customer} />
                <Route  path="/customer" component={Customer} />
                <Route  path="/technician" component={Technician} />
            </div>
        </BrowserRouter>
    )
} 

render(<Root/>, document.getElementById('root'));
