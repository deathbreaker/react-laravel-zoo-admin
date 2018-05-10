import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root/Root'

window._ = require('lodash');

ReactDOM.render(
    <div className="body"><Root/></div>,
    document.getElementById('app')
);


