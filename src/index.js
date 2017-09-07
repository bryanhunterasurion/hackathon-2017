import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './module/App';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route component={App} />
            </div>
        </BrowserRouter>
    )
} 

render(<Root/>, document.getElementById('root'));
