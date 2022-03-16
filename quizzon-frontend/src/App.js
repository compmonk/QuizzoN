import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import {Home} from "./components/Home";
import {AuthProvider} from "./auth/AuthProvider";
import SignOut from "./components/SignOut";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navigation/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<SignIn/>}/>
                    <Route path="/logout" element={<SignOut/>}/>
                    <Route exact path='/game' element={<PrivateRoute/>}>
                        <Route exact path='/game' element={<Game/>}/>
                    </Route>
                    <Route exact path='/leaderboard' element={<PrivateRoute/>}>
                        <Route exact path='/leaderboard' element={<Leaderboard/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
