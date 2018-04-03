import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

window._ = require('lodash');

ReactDOM.render(
	<Root/>,
    document.getElementById('app')
);