import { Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import LoginForm from "./components/Log_in_Form";
import HomePage from "./components/Home_page";
import SignUp from "./components/Sign_up_Form";
import LandingPage from "./components/Landing_page";
import GameTablesList from "./components/Game_tables_list";
import Leaderboard from "./components/Leaderboard";
import UserInfo from "./components/User_information";
import ActiveGame from "./components/Active_Game_Table";
import React from "react";
import { useState, useEffect } from "react";

const Container = styled.div``;

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [games, setGames] = useState([]);

  // login function
  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res
          .json()
          .then((player) => {
            setIsAuthenticated(true);
            setCurrentPlayer(player);
          })
          .then(() => {
            fetch("/games")
              .then((res) => res.json())
              .then((games) => {
                console.log("games:", games);
                setGames(games);
              });
          });
      }
    });
  }, []);

  if (!isAuthenticated)
    return (
      <LoginForm
        error={"please login"}
        setIsAuthenticated={setIsAuthenticated}
        setCurrentPlayer={setCurrentPlayer}
      />
    );

  return (
    <Container>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>

        <Route path="/games" element={<GameTablesList />}></Route>

        <Route path="/leaderboard" element={<Leaderboard />}></Route>

        <Route path="/${username}" element={<UserInfo />}></Route>

        <Route path="/${GameName}" element={<ActiveGame />}></Route>
        <Route
          path="/"
          element={<LandingPage setCurrentPlayer={setCurrentPlayer} />}
        ></Route>

        <Route
          path="/login"
          element={<LoginForm setCurrentPlayer={setCurrentPlayer} />}
        ></Route>
        <Route
          path="/auth"
          element={<SignUp setCurrentPlayer={setCurrentPlayer} />}
        ></Route>
      </Routes>
    </Container>
  );
}

export default App;
