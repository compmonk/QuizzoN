import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../App.css";
import axios from 'axios';


export default function Question(props ) {
  const [selectedOption, setSelectedOption] = useState(props.data.optionA);


  const handleOptionChange = async (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('You have selected:', selectedOption);

    const answerData = {
      "answer": selectedOption
  }
  const { data } = await axios.post("/api/user/question", answerData)

  console.log(data);
  props.sendDataToParent(data.correct);

  };

  return (
    <form onSubmit={onSubmit}>
      <div className="question">
        <tr>
          <p>{props.data.questionText} </p>
        </tr>
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

        <button className="btn btn-default" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
