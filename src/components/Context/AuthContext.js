import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthenticationContext = createContext()

const AuthContextProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthenticationContext.Provider value={allContext}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthContextProvider;