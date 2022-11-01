import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage/homePage";
import LoginPage from "./LoginJoinPage/loginPage.jsx"
import JoinPage from "./LoginJoinPage/joinPage.jsx"
import WritePage from "./WritingPage/writePage.jsx"
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage />}/>
      <Route path = "/login" element = {<LoginPage />}/>
      <Route path = "/join" element = {<JoinPage />}/>
      <Route path = "/write" element = {<WritePage />}/>
      <Route path = "/write" element = {<WritePage />}/>
    </Routes>
  );
}

export default App;
