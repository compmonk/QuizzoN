import SignIn from "./components/containers/user/SignIn";
import SignUp from "./components/containers/user/SignUp";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { Navigation } from "./components/containers/Navigation";
import Game from "./components/containers/Game";
import Leaderboard from "./components/containers/Leaderboard";
import { Home } from "./components/containers/Home";
import {AuthProvider} from "./components/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
      {/*    <Route path="/logout">*/}
      {/*      /!* <SignOut signout={() => axios.get("/api/root/logout")} /> *!/*/}
      {/*    </Route>*/}
          <Route path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
