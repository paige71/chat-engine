import React, { useState, createContext } from "react"; 

export const Context = createContext();

//share between applications
export const ContextProvider = (props) => {
    const [username, setUsername] = useState(""); 
    const [secret, setSecret] = useState(""); 

    const value = {
        username, 
        setUsername,
        secret,
        setSecret,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

