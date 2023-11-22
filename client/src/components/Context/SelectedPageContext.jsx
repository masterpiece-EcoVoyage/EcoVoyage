// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [page, setPage] = useState("dashboard");

    const onSelectedPage = (selectedPage) => {
        setPage(selectedPage);
    };

    const pageContextValue = {
        page,
        onSelectedPage,
    };

    return (
        <PageContext.Provider value={pageContextValue}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => {
    return useContext(PageContext);
};
