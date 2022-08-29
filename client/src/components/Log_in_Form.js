import styled from "styled-components";
import { useState } from "react";
const Container = styled.div``;

function LoginForm({ onLogin, setCurrentPlayer }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((player) => setCurrentPlayer(player));
      }
    });
  }

  return (
    <Container>
      <div className="toggle-login-and-sign-up">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="enter-username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter Username/email here"
        />
        <input
          type="password"
          id="enter-paassword"
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" enter password/here"
        />
        <button className="submit-button"> Submit </button>
      </form>
      </div>
    </Container>
  );
}
export default LoginForm;
