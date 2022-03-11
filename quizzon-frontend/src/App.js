import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/containers/user/SignIn";
import SignUp from "./components/containers/user/SignUp";
import Tests from "./components/containers/Question";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {Switch} from "react-router";
import { Navigation } from "./components/containers/Navigation";
import Game from "./components/containers/Game";
import Leaderboard from "./components/containers/Leaderboard";
import { Home } from "./components/containers/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/logout">
            {/* <SignOut signout={() => axios.get("/api/root/logout")} /> */}
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
