import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>Welcome to QuizzoN !!!</h1>
            <Button as={Link} to="/game">Play Game</Button>
        </div>
    )
}