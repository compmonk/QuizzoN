import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Question(props) {
  const [selectedOption, setSelectedOption] = useState(props.data.optionA);
  const [data, setData] = useState({});

  const handleOptionChange = async (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("You have selected:", selectedOption);

    const answerData = {
      answer: selectedOption,
    };
    const { data } = await axios.post("/api/user/question", answerData);

    console.log(data);
    setData(data);

    if (data.correct) {
    }
  };

  return (
    <form onSubmit={onSubmit} key="reloadKey">
      <div className="question">
       
          <h2>{props.data.questionText} </h2>
        
        <table>
        <tbody>
          <div className="radio-btn">
            <tr>
              <td>
                <input
                  type="radio"
                  value={props.data.optionA}
                  checked={selectedOption === props.data.optionA}
                  onChange={handleOptionChange}
                />
                {props.data.optionA}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  value={props.data.optionB}
                  checked={selectedOption === props.data.optionB}
                  onChange={handleOptionChange}
                />
                {props.data.optionB}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  value={props.data.optionC}
                  checked={selectedOption === props.data.optionC}
                  onChange={handleOptionChange}
                />
                {props.data.optionC}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  value={props.data.optionD}
                  checked={selectedOption === props.data.optionD}
                  onChange={handleOptionChange}
                />
                {props.data.optionD}
              </td>
            </tr>
          </div>
        </tbody>
        </table>
        {data.question ? (
          <Button  type="button" onClick={() => window.location.reload()}>
            Next
          </Button>
        ) : (
          <button className="btn btn-default" type="submit">
            Submit
          </button>
        )}
      </div>

      {data.question ? (
        <div>
          {data.correct ? (
            <p>Correct!!!!</p>
          ) : (
            <div>
              <p>Wrong !!!!</p>
              <p> The correct answer is : {data.question?.answer}</p>
            </div>
          )}

          <p>Explanation : {data.question?.explanation}</p>
        </div>
      ) : null}
    </form>
  );
}
