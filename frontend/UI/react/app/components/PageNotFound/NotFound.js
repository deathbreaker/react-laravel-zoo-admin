import React from 'react';
import Navigation from "./../Navigation";

const NotFound = (props) => (
    <div className="body-color">
        <Navigation logoutLink={props.authorized}/>
        <div className="app-title text-center">
            <h1 className="header2 h2-size">404 Error - Page not found</h1>
        </div>
    </div>
);

export default NotFound;