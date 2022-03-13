import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import {Loading} from "./Loading";
import {Col, Container, Row} from "react-bootstrap";

export default function Leaderboard() {
    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            await axios.get("/api/user/leaderboard").then((response) => {
                setData(response.data);
                setLoadingData(false);
            });
        }

        if (loadingData) {
            // if the result is not ready so you make the axios call
            getData();
        }
    }, []);

    return (<Container>
            {loadingData ? (<Loading/>
            ) : (
                <Row className="justify-content-md-center">
                    <Col md={10} xl={10} lg={10}>
                        <h1>Leaderboard</h1>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Email</th>
                                <th>Questions Played</th>
                                <th>Correct Answer</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>

                            {data.map((entry) => (
                                <tr key={entry._id}>
                                    <td>{entry.email}</td>
                                    <td>{entry.questionsPlayed}</td>
                                    <td>{entry.correctAnswer}</td>
                                    <td>{entry.total}</td>
                                </tr>
                            ))}

                            </tbody>
                        </Table>
                    </Col>
                </Row>)}
        </Container>
    )
}