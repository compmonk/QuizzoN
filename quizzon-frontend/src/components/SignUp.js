import React from 'react'
import {Button, Row, Col, Form, Container} from "react-bootstrap";

import axios from 'axios';
import {useNavigate} from "react-router-dom"

function SignUp() {
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        const user = {

            "email": email.value,
            "password": password.value
        }
        const {data} = await axios.post("/api/signup", user, {withCredentials: true, headers: document.cookie})
        navigate("/login")
    }


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4} xl={4} lg={4}>
                    <Form className="form" onSubmit={onSubmit}>
                        <h2>Signup</h2>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="johndoe@example.com"/>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="S3cR3t"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;
