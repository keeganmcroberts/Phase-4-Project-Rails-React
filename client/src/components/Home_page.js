import styled from "styled-components"

import NavBar from './Nav_bar'

const Container = styled.div`

`

function HomePage({ player }) {
    if (user) {
      return <h1>Welcome, {player.username}!</h1>;
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default HomePage;


// function HomePage (){
//     return(
//         <Container>
//             <NavBar/>

//         </Container>
//     )
// }
// export default HomePage