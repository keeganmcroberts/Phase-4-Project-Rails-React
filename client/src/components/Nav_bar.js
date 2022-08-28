import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

function NavBar({ onLogOut }) {
  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => onLogOut(r));
  }
  return (
    <Container>
      <div className="below-title">
      {/* <Link to="/home">Home</Link> */}
      <Link to="/${player_id}">User Info</Link>
      <Link to="/games">Games List</Link>
      <button onClick={handleLogOut}>Logout</button>
      </div>
    </Container>
  );
}
export default NavBar;
