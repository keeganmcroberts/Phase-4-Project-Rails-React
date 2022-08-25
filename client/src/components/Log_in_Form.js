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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter Username/email here"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" enter password/here"
        />
        <button> Submit </button>
      </form>
    </Container>
  );
}
export default LoginForm;
