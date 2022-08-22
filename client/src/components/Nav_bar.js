import styled from "styled-components";

const Container = styled.div`
`

const Link = styled.link`
`


function NavBar(){
    return(
        <Container>
            <Link to='/home'>
                Home
            </Link>
            <Link to="/${Username interpotalion}">
                User Information
            </Link>
            <Link to="games">
                Games List 
            </Link>

        </Container>
    )
}
export default NavBar