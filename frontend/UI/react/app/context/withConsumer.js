import React from 'react';
import {ZooContext} from "./ZooContext";

function getTheme(Component) {
    class GetTheme extends React.Component {
        render() {
            return (
                <ZooContext.Consumer>
                    {theme =>
                        <Component
                            { ...this.props }
                            theme={theme}
                        />
                    }
                </ZooContext.Consumer>
            );
        }
    }
}

export {getTheme};