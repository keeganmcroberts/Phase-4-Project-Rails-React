import {Routes, Route} from "react-router-dom"
import './App.css';
import styled from "styled-components";

import LoginForm from './components/Log_in_Form'
import HomePage from "./components/Home_page";
import LandingPage from './components/Landing_page'
import GameTablesList from './components/Game_tables_list'
import Leaderboard from './components/Leaderboard'
import UserInfo from './components/User_information'
import ActiveGame from "./components/Active_Game_Table";



const Container = styled.div`

`

function App() {
  return (
    <Container>
      {/* <Card/> */}
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
          
        <Route path="/log_in" element={<LoginForm/>}>
        </Route>

        <Route path="/home" element={<HomePage/>}>
          </Route>

        <Route path="/games" element={<GameTablesList/>}>
        </Route>

        <Route path='/leaderboard' element={<Leaderboard/>}>
        </Route>

        <Route path='/user' element={<UserInfo/>}>
        </Route>

        <Route path='/game' element={<ActiveGame/>}>
        </Route>

      </Routes>

    </Container>
  );
}

export default App;
