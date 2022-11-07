import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginJoinPage/loginPage.jsx";
import JoinPage from "./LoginJoinPage/joinPage.jsx";
import WritePage from "./WritingPage/writePage.jsx";
import BookClub from "./BookClubList/BookClub.jsx";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
   
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/clublist" element = {<BookClub />} />
      </Routes>
   
  );
}

export default App;
