import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginJoinPage/loginPage.jsx";
import JoinPage from "./LoginJoinPage/joinPage.jsx";
import WritePage from "./WritingPage/writePage.jsx";
import BookClub from "./BookClubListPage/BookClub.jsx";
import Detail from "./BookClubDetailPage/BookDetail";
import Test from "./test";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
   
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/clublist" element = {<BookClub />} />
        <Route path="/test" element = {<Test />} />
        <Route path = "/detail/:id" element = {<Detail />}/>
      </Routes>
   
  );
}

export default App;
