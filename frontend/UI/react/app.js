import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root/root'

window._ = require('lodash');

ReactDOM.render(
    <div className="body-color"><Root/></div>,
    document.getElementById('app')
);


