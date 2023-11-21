// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the token is present in cookies
        const token = cookies['token'];

        if (token) {
            // Token exists, user is logged in
            setIsLoggedIn(true);
        } else {
            // Token does not exist, user is not logged in
            setIsLoggedIn(false);
        }
    }, [cookies]);

    const login = (token) => {
        setCookie('yourTokenCookieName', token, { path: '/' });
        setIsLoggedIn(true);
    };

    const logout = () => {
        removeCookie('yourTokenCookieName', { path: '/' });
        setIsLoggedIn(false);
    };

    const authContextValue = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
