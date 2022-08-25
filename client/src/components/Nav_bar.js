import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

function NavBar() {
  return (
    <Container>
      <Link to="/home">Home</Link>
      <Link to="/${Username interpolation}">User Info</Link>
      <Link to="/games">Games List</Link>
    </Container>
  );
}
export default NavBar;
