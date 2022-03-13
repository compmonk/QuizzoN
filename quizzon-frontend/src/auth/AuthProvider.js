import React, {useState} from 'react';

import {AuthContext} from "./AuthContext";
import {Loading} from "../components/Loading";


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);

    if (loadingUser) {
        return <Loading />;
    }

    return <AuthContext.Provider value={{
        currentUser,
        setCurrentUser,
        loadingUser,
        setLoadingUser,
    }}>{children}</AuthContext.Provider>;
};