import React from 'react';
import {render} from 'react-dom';
import App from "./app/App";
import {BrowserRouter} from 'react-router-dom';
//window._ = require('lodash');

const Application = () => (
    <div className="body">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
);


render(
    <Application/>,
    document.getElementById('app')
);
