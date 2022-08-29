import { Routes, Route } from "react-router-dom";
import { Switch } from "react-dom";
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
import NavBar from "./components/Nav_bar";

const Container = styled.div``;

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [games, setGames] = useState([]);

  // stay logged in function
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res
          .json()
          .then((player) => {
            // setIsAuthenticated(true);
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

  // logging out
  function onLogOut() {
    setCurrentPlayer(null);
  }

  if (!currentPlayer)
    return (
      <>
        <h1>Welcome to Um!</h1>
        <LandingPage />
        <h2>Login:</h2>
        <LoginForm error={"please login"} setCurrentPlayer={setCurrentPlayer} />
        <h2>Sign-up:</h2>
        <SignUp setCurrentPlayer={setCurrentPlayer} />
      </>
    );

  return (
    <Container>
      <h1>Welcome back to Um,{currentPlayer.user_name} </h1>
      <NavBar onLogOut={onLogOut} />
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>

        <Route path="/games" element={<GameTablesList />}></Route>

        <Route path="/leaderboard" element={<Leaderboard />}></Route>

        <Route path="/:user_name" element={<UserInfo />}></Route>

        <Route path="/games/:name" element={<ActiveGame />}></Route>
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
