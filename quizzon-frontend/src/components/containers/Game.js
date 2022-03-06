import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../App.css";

export default function Game() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function handleSubmit(event) {
    event.preventDefault();
  }



  return (
    <div>
      <p>Welcome to Game </p>
    </div>

  );

}