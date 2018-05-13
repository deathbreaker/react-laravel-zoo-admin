import React from 'react';
import {ZooContext} from "./ZooContext";

// This function takes a component...
export function withConsumer(Component) {
    // ...and returns another component...
    return function ZooComponent(props) {
        // ... and renders the wrapped component with the context theme!
        // Notice that we pass through any additional props as well
        return (
            <ZooContext.Consumer>
                {theme => <Component {...props} theme={theme} />}
            </ZooContext.Consumer>
        );
    };
}