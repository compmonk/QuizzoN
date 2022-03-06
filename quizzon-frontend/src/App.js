import logo from './logo.svg';
import './App.css';
import SignIn from './components/containers/user/SignIn';
import SignUp from './components/containers/user/SignUp';
import Tests from './components/containers/Question';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Quizzo
        </p>


      </header>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">SignIn</Link> |{" "}
        <Link to="/register">SignUp</Link> |{" "}
        <Link to="/leaderboard">Leaderboard</Link> |{" "}
        <Link to="/game">Game</Link>

      </nav>
    </div>
  );
}

export default App;
