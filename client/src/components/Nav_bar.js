import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
`

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
    return (
      <header>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </header>
    );
  }
  
  export default NavBar;





// function NavBar(){
//     return(
//         <Container>
//             <Link to='/home'>
//                 Home
//             </Link>
//             <Link to="/${Username interpotalion}">
//                 User Info
//             </Link>
//             <Link to="games">
//                 Games List 
//             </Link>

//         </Container>
//     )
// }
// export default NavBar