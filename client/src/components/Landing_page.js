import styled from "styled-components";

import LoginForm from "./Log_in_Form";

const Container = styled.div`
`


function LandingPage({onLogin}){
    return(
        <Container>
            <h4> UM a Game of Skill, Luck, and endless Patience </h4>
            < LoginForm className="log-in"/>

        </Container>
    )
}
export default LandingPage