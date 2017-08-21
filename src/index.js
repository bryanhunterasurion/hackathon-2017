import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Customer from './Customer';
import Technician from './Technician';

const Root = () => {
        return (
            <BrowserRouter>
                <div>
                    <Match exactly pattern="/" component={Customer}/>
                    <Match pattern="/customer" component={Customer}/>
                    <Match pattern="/technician" component={Technician}/>
                </div>
            </BrowserRouter>
        )
} 

render(<Root/>, document.getElementById('root'));
