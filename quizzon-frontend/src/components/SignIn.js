import React, {useContext} from 'react'
import {Button, Row, Col, Form, Container} from "react-bootstrap";
import axios from 'axios';
import {useNavigate} from "react-router-dom"

import {AuthContext} from "../auth/AuthContext";


function SignIn() {
    const {setCurrentUser} = useContext(AuthContext);

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        const postData = {
            "email": email.value,
            "password": password.value,
        }
        const {data} = await axios.post(
            "/api/login",
            postData,
            {withCredentials: true, headers: document.cookie}
        )
        setCurrentUser(data);
        navigate("/game")
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4} xl={4} lg={4}>
                    {/* Add the form to signin */}
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;
