import { Switch, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import SignUp from "./SignUp";
import LoginForm from "./components/Log_in_Form";
import NavBar from "./components/Nav_bar";
import HomePage from "./components/Home_page";
import React, {useEffect, useState} from "react";

import LandingPage from "./components/Landing_page";
import GameTablesList from "./components/Game_tables_list";
import Leaderboard from "./components/Leaderboard";
import UserInfo from "./components/User_information";
import ActiveGame from "./components/Active_Game_Table";
import react from "react";
import { useState } from "react";

const Container = styled.div``;

function App() {
  function onLogin(data) {
    console.log("App component, onLogin:", data);
  }

  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage onLogin={onLogin} />}></Route>

        <Route path="/log_in" element={<LoginForm onLogin={onLogin} />}></Route>

        <Route path="/home" element={<HomePage />}></Route>

        <Route path="/games" element={<GameTablesList />}></Route>

        <Route path="/leaderboard" element={<Leaderboard />}></Route>

        <Route path="/${username}" element={<UserInfo />}></Route>

        <Route path="/${GameName}" element={<ActiveGame />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
