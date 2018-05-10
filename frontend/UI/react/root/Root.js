import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {BrowserRouter} from 'react-router-dom';


import {ZooContext} from './context/ZooContext';
import App from "./App";


class Root extends Component {

    render() {
        return(
            <ZooContext.Provider value={{
                state: this.state,
                actions: {rerenderPage: () => this.setState({state: this.state})}
            }}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ZooContext.Provider>
        )
    }
}

export default Root;