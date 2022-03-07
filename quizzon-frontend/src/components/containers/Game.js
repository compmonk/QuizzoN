import React, { useContext, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";
import Question from "./Question";

function Game(props) {
  const { currentUser, setCurrentUser, cookies, setCookies } =
    useContext(AuthContext);

  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState({});
  const [isCorrect, setIsCorrect] = useState("false")

  React.useEffect(() => {
    async function getData() {
      await axios.get("/api/user/question").then((response) => {
        // check if the data is populated
        console.log(response.data);
        setData(response.data);
        // you tell it that you had the result
        setLoadingData(false);
      });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);



  const sendDataToParent = (correctFlag) => { 
    setIsCorrect(correctFlag)
    console.log("correctFlag", correctFlag, isCorrect);

    // show on page the answer and explanation 

    //show next button
  };

  return (
    <div>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Question data={data} sendDataToParent={sendDataToParent}></Question>
      )}
    </div>
  );
}

export default Game;
