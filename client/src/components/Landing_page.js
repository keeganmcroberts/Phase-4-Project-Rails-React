import styled from "styled-components";
import SignUp from "./Sign_up_Form";
import LoginForm from "./Log_in_Form";

const Container = styled.div``;

function LandingPage({ setCurrentPlayer }) {
  return (
    <Container>
      <h4> UM a Game of Skill, Luck, and endless Patience </h4>
      <LoginForm className="log-in" setCurrentPlayer={setCurrentPlayer} />
      <SignUp setCurrentPlayer={setCurrentPlayer}/>
    </Container>
  );
}
export default LandingPage;
