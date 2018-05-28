import React from 'react';
import {render} from 'react-dom';
import Root from "./root/Root";
import {BrowserRouter} from 'react-router-dom';

const App = () => (
    <div className="body">
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    </div>
);

render(
    <App/>,
    document.getElementById('app')
);
