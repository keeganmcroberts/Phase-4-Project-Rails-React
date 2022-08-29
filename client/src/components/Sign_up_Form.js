import styled from "styled-components";
import React, { useState } from "react";

function SignUp({ onLogin, setCurrentPlayer }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => setCurrentPlayer(data));
  }
  return (
    <div className="toggle-login-and-sign-up"> 
    {/* <div className="sign-up"> */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input 
        type="password"
        id="password-confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button className="submit-button" type="submit">Submit</button>
    </form>
    {/* </div> */}
    </div>
  );
}

export default SignUp;
