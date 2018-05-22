import React from 'react';
const UserContext = React.createContext({
    isAuthorized: false,
    isAdmin: false,
});

export default UserContext;