import React from "react";

export const AuthContext = React.createContext({
    currentUser:{},
    setCurrentUser:() => {},
    cookies:"",
    setCookies:() => {},
}) ;