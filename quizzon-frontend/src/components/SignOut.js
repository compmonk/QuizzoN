import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Home} from "./Home";
import {Loading} from "./Loading";
import {AuthContext} from "../auth/AuthContext";


function SignOut() {
    const {currentUser, setCurrentUser} = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/api/logout", {withCredentials: true, headers: document.cookie}).then((response) => {
            setCurrentUser(null)
            navigate("/")
            setIsLoading(false)
        })
    }, [])

    return null
}

export default SignOut;