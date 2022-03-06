import React from "react";
import {Redirect} from "react-router-dom";


export const isLoggedIn = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith("uid")) {
            return true
        }
    }
    return false
};

export const LoginValidator = ({ChildComponent}) => {
    return (
        isLoggedIn() ? <ChildComponent/> : <Redirect to="/"/>
    )
};