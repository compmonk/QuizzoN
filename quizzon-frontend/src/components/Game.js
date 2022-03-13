import React, {useEffect, useContext, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

import axios from "axios";
import {AuthContext} from "../auth/AuthContext";
import {Loading} from "./Loading";

function Game() {
    const {currentUser, setCurrentUser} = useContext(AuthContext);
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [answer, setAnswer] = useState("")
    const [questionId, setQuestionId] = useState(currentUser?.questionsPlayed)
    const [loadingData, setLoadingData] = useState(true);
    const [isCorrect, setIsCorrect] = useState("false");


    useEffect(() => {


        async function getData() {
            await axios.get("/api/user/question", {
                withCredentials: true,
                headers: document.cookie
            }).then((response) => {
                setCurrentQuestion(response.data);
                setLoadingData(false);
            });
        }

        getData()
    }, [questionId]);

    const selectAnswer = (event) => {
        setAnswer(event.target.value)
    }

    const submitAnswer = async (event) => {
        event.preventDefault()
        const {data} = await axios.post("/api/user/question", {answer}, {
            withCredentials: true,
            headers: document.cookie
        })
        setCurrentUser(data.user)
        setCurrentQuestion(data.question)
    }

    return (
        <Container>
            {loadingData ? (
                <Loading/>
            ) : (
                <Row className="justify-content-md-center">
                    <Col md={8} xl={8} lg={8}>
                        <Form onSubmit={submitAnswer} className="form">
                            <h2>{currentQuestion.questionText}</h2>
                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionA}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionA}
                                            checked={answer === currentQuestion.optionA}/>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionB}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionB}
                                            checked={answer === currentQuestion.optionB}/>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionC}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionC}
                                            checked={answer === currentQuestion.optionC}/>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionD}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionD}
                                            checked={answer === currentQuestion.optionD}/>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                {currentQuestion.explanation ? <h5>{currentQuestion.explanation}</h5> : null}
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                {currentQuestion.answer ?
                                    <Button onClick={() => setQuestionId(currentUser.questionsPlayed)}>Next</Button> :
                                    <Button type="submit">Submit</Button>}
                            </Form.Group>

                        </Form>

                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Game;
