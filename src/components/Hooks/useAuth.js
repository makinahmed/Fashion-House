import React, { useContext } from 'react';
import { AuthenticationContext } from '../Context/AuthContext';

const useAuth = () => {
    return useContext(AuthenticationContext);
};

export default useAuth;