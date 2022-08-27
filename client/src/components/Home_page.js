import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router';

import NavBar from './Nav_bar'

const Container = styled.div`

`




function HomePage (){
    let navigate = useNavigate();
    function enterGame(){
        navigate("/Game")
    }

    return(
        <Container>
            <NavBar/>

            <button onClick={enterGame} > Join Game </button>

        </Container>
    )
}
export default HomePage