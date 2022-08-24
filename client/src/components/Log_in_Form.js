import styled from "styled-components";
import { useState } from "react";
const Container = styled.div``;

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((player) => setPlayer(player));
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;





  //   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="enter Username/email here"
//         />
//         <input
//           type="text"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder=" enter password/here"
//         />
//         <button> Submit </button>
//       </form>
//     </Container>
//   );
// }
// export default LoginForm;
