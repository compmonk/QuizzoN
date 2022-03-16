import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Container, Button} from "react-bootstrap";
import {AuthContext} from "../auth/AuthContext";
import {useContext} from "react";

const GuestNavigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    QuizzoN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/signup">
                            Signup
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const UserNavigation = ({user}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    QuizzoN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/game">
                            Play Game
                        </Nav.Link>
                        <Nav.Link as={Link} to="/leaderboard">
                            Leaderboard
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title={`${user.email} (${user.correctAnswer}/${user.questionsPlayed})`}
                            id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/logout">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
)
    ;
};

export const Navigation = () => {
    const {currentUser} = useContext(AuthContext);

    // check for user and return UserNavigation and GuestNavigation
};
