import {Button, Col, Container, Row} from "react-bootstrap"
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6} xl={6} lg={6}>
                    <h1>Welcome to QuizzoN !!!</h1>
                    <Button as={Link} to="/game">Play Game</Button>
                </Col>
            </Row>
        </Container>
    )
}