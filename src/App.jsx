import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Takliflar from "./pages/Takliflar/Takliflar";
import Mijozlar from "./pages/Clients/Mijozlar";
import MijozlarById from "./pages/Clients/MijozlarById";
import MijozInfo from "./pages/Clients/MijozInfo";
import Payment from "./pages/Settings/Payment";
import SettingChange from "./pages/Settings/SettingChange";
import SettingsUsers from "./pages/Settings/SettingsUsers";
import SettingsDriver from "./pages/Settings/SettingsDriver";
import { Login } from "./components/Login";
import "./assets/styles/main.css";
import { Category } from "./pages/Category";
import { NotFound } from "./pages/NotFound";
import { FastFood } from "./pages/FastFood";
import { SinglePage } from "./pages/SinglePage";
import { Food } from "./pages/Food";
import Modal from "react-modal";
import Private from "./layout/Private";
import Public from "./layout/Public";
Modal.setAppElement("#root");

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // if(token) {
  //   return <Private/>
  // }else {
  //   return <Public/>
  // }
   return <> {token ? <Private/> : <Public/>} </>
}

export default App;
