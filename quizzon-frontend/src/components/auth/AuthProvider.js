import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {AuthContext} from "./AuthContext";


export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);
    const [cookies, setCookies] = useState("");

    useEffect(() => {
        async function fetchData() {
            const {data} = await axios.get("/api/user/detail")
            setCurrentUser(data)
        }

        fetchData()
    }, []);

    if (loadingUser) {
        return <div>Loading....</div>;
    }

    return <AuthContext.Provider value={{
        currentUser,
        setCurrentUser,
        loadingUser,
        setLoadingUser,
        cookies,
        setCookies
    }}>{children}</AuthContext.Provider>;
};