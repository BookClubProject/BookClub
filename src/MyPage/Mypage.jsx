import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import Bottom from "../PublicComponent/BottomComponent";
import Sidebar from "./Sidebar/Sidebar";
import TopInf from "./TopInf";
import { Routes, Route } from "react-router-dom";
import Profil from "./Component//Profil/Profil.jsx";
import Alarm from "./Component/Alam/Alarm.jsx";
import Account from "./Component/Account/Account.jsx";
import Inquiry from "./Component/Inquiry/Inquiry.jsx";
import Record from "./Component/Record/Record.jsx";
import Manage from "./Component/Manage/Manage.jsx";
import Edit from "./Component/Edit/Edit.jsx";
const styles = {
  wrapper: {
    height: "100%",
    width: "100%" /* 가로 사이즈를 브라우저에 가득 채움 */,
    // fontFamily: "Jua, sans-serif",
  },
  main_wrap: {
    height: "100%",
    // height: "75rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    //  background: "yellow",
    // marginBottom : "7rem"

  },
  main_content: {
    height: "100%",
    width: "110rem",
    background: "white",
    display: "flex",
    paddingTop : "10px",

  
  },
  main_content_cover : {
    height: "auto",
    flex : "8",
    // border : "1px solid rgb(146, 146, 145)",
    borderRadius : "8px",
    padding : "5px",
    marginLeft : "4px",
  }
};

function MyPage() {
  return (
    <div style={styles.wrapper}>
      <TopMenuBarComponent />
      <TopInf />
      <div style={styles.main_wrap}>
        <div style={styles.main_content}>
          <Sidebar />
          <div style ={styles.main_content_cover}>
            <Routes>
              <Route path="/" exact element={<Profil />}></Route>
              <Route path="/profil" element={<Profil />}></Route>
              <Route path="/notice" element={<Alarm />}></Route>
              <Route path="/editmember" element={<Account />}></Route>
              <Route path="/inquiry" element={<Inquiry />}></Route>
              <Route path="/discussion/records" element={<Record />}></Route>
              <Route path="/manage" element={<Manage />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
            
            </Routes>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default MyPage;
