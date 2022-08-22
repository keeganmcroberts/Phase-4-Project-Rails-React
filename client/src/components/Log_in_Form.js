import styled from "styled-components"

const Container = styled.div`

`

function LoginForm(){
    return(
        <Container>
            <form>
                <input type='text' placeholder="enter Username/email here"/>
                <input type="text" placeholder=" enter password/here"/>
                <button> Submit </button>
            </form>

        </Container>
    )
}
export default LoginForm