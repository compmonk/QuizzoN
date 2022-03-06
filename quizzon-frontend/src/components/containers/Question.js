import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../App.css";

export default function Question() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function radioChanged() {

  }

  return (
    <div className="question">
      <tbody>
        <tr>
          <p>Question is blah blah blah blah </p>

        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="option-A"
              value="A"
              checked="false"
              onChange={radioChanged}
            />
            questionsdfsdfsfjsdlkfsdljfsldfjsld
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="option-B"
              value="B"
              checked="false"
              onChange={radioChanged}
            />
            questionsdfsdfsfjsdlkfsdljfsldfjsld
          </td>
        </tr>

        <tr>
          <td>
            <input
              type="radio"
              name="option-C"
              value="C"
              checked="false"
              onChange={radioChanged}
            />
            questionsdfsdfsfjsdlkfsdljfsldfjsld
          </td>
        </tr>

        <tr>
          <td>
            <input
              type="radio"
              name="option-D"
              value="D"
              checked="false"
              onChange={radioChanged}
            />
            questionsdfsdfsfjsdlkfsdljfsldfjsld
          </td>
        </tr>


      </tbody>

    </div>

  );

}