import React from 'react';

const LoaderIn = (props) => (
    <div className="body-color">
        <div className="page-loader">
            <div className="border-radius-for-icon">
                <i className="loader-icon ra ra-lion ra-fw"></i>
            </div>
            <h2 className="header2 h2-size">Admin Zoo App</h2>
        </div>
    </div>
);

export default LoaderIn;














// import Loadable from "react-loadable";
/*
const Index = Loadable({
    loader: () => import('./Index'),
    loading: splashscreen,
    delay: 50000000000000
});

const Home= Loadable({
    loader: () => import('./Home'),
    loading: splashscreen,
    delay:  50000000000000
});
*/