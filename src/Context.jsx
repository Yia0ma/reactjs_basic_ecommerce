import React from "react";

const Context = React.createContext();

const ContextProvider = ({children}) => {
    return (
        <ContextProvider value="">
            {children}
        </ContextProvider>
    );
};

export {ContextProvider, Context};