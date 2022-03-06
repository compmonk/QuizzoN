import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Question from './components/containers/Question';
import Login from './components/containers/Login';
import Register from './components/containers/Register';
import Leaderboard from './components/containers/Leaderboard';
import Game from './components/containers/Game';
import SignIn from './components/containers/user/SignIn';
import SignUp from './components/containers/user/SignUp';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="game" element={<Game />} />


    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
