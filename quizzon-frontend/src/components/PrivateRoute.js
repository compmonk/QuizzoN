import React, {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "../auth/AuthContext";

export const PrivateRoute = () => {
    const {currentUser} = useContext(AuthContext);
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}