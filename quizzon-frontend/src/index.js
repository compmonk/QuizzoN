import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Question from './components/containers/Question';
import Leaderboard from './components/containers/Leaderboard';
import Game from './components/containers/Game';
import SignIn from './components/containers/user/SignIn';
import SignUp from './components/containers/user/SignUp';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
