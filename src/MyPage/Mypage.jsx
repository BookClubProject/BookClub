import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import Bottom from "../PublicComponent/BottomComponent";
import Sidebar from "./Component/Sidebar";
import TopInf from "./Component/TopInf";
import { Routes, Route } from "react-router-dom";
import Profil from "./Component//Profil/Profil.jsx";
import Content2 from "./Component/Content2.jsx";


const styles = {
  wrapper: {
    height: "100vh",
    width: "100%" /* 가로 사이즈를 브라우저에 가득 채움 */,
    fontFamily: "Jua, sans-serif",
  },
  main_wrap: {
    height: "75rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "yellow",
  },
  main_content: {
    height: "100%",
    width: "110rem",
    background: "white",
    display: "flex",
  },
  main_content_cover : {
    height: "100%",
    flex : "8",
    border : "1px solid rgb(146, 146, 145)",
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
              <Route path="/notice" element={<Content2 />}></Route>
              <Route path="/editmember" element={<Content2 />}></Route>
              <Route path="/d2" element={<Content2 />}></Route>
              <Route path="/3" element={<Content2 />}></Route>
              <Route path="/4" element={<Content2 />}></Route>
              <Route path="/5" element={<Content2 />}></Route>
              <Route path="/6" element={<Content2 />}></Route>
              <Route path="/7" element={<Content2 />}></Route>
              <Route path="/8" element={<Content2 />}></Route>
              <Route path="/9" element={<Content2 />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default MyPage;
