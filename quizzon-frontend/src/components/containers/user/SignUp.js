import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Form } from "react-bootstrap";

import axios from 'axios';
import { AuthContext } from "../../auth/AuthContext";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom"

function SignUp() {
    const {
        currentUser,
        setCurrentUser,
        cookies,
        setCookies
    } = useContext(AuthContext);
    const [currencies, setCurrencies] = useState([])
    const navigate = useNavigate()



    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const user = {

            "email": email.value,
            "password": password.value
        }
        const { data } = await axios.post("/api/signup", user, { withCredentials: true, headers: cookies })
        setCurrentUser(data);
        setCookies(document.cookie);
        navigate("/game")

    }


    return (
        <Form className="container-fluid col-sm-4 col-md-4 col-lg-4 counselor-form" onSubmit={onSubmit}>

            <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" type="input" placeholder="John" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" type="input" placeholder="Doe" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="johndoe@example.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="S3cR3t" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignUp;
