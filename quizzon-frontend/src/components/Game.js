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
        // post the answer, get the response
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
                                            checked={answer === currentQuestion.optionA}
                                            className={
                                                currentQuestion.answer && currentQuestion.optionA === answer ?
                                                    (currentQuestion.answer === currentQuestion.optionA ? "correct-answer" : "incorrect-answer") :
                                                    (currentQuestion.answer === currentQuestion.optionA ? "correct-answer" : "disabled")
                                            }
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionB}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionB}
                                            checked={answer === currentQuestion.optionB}
                                            className={
                                                currentQuestion.answer && currentQuestion.optionB === answer ?
                                                    (currentQuestion.answer === currentQuestion.optionB ? "correct-answer" : "incorrect-answer") :
                                                    (currentQuestion.answer === currentQuestion.optionB ? "correct-answer" : "")
                                            }
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionC}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionC}
                                            checked={answer === currentQuestion.optionC}
                                            className={
                                                currentQuestion.answer && currentQuestion.optionC === answer ?
                                                    (currentQuestion.answer === currentQuestion.optionC ? "correct-answer" : "incorrect-answer") :
                                                    (currentQuestion.answer === currentQuestion.optionC ? "correct-answer" : "")
                                            }
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                <Form.Check type="radio"
                                            label={currentQuestion.optionD}
                                            onChange={selectAnswer}
                                            value={currentQuestion.optionD}
                                            checked={answer === currentQuestion.optionD}
                                            className={
                                                currentQuestion.answer && currentQuestion.optionD === answer ?
                                                    (currentQuestion.answer === currentQuestion.optionD ? "correct-answer" : "incorrect-answer") :
                                                    (currentQuestion.answer === currentQuestion.optionD ? "correct-answer" : "")
                                            }
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                {currentQuestion.explanation ? <h5>{currentQuestion.explanation}</h5> : null}
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3">
                                {currentQuestion.answer ?
                                    <Button >Next</Button> :
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
