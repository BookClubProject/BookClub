import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import Bottom from "../PublicComponent/BottomComponent";
import Sidebar from "./Component/Sidebar";
import TopInf from "./Component/TopInf";
import { Routes, Route } from "react-router-dom";
import Content from "./Component/Content.jsx";
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
    background : "yellow"
  },
  main_content: {
    height: "100%",
    width: "110rem",
    background : "white",
    display : "flex"
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
          <Routes>
            <Route path="/" exact element={<Content />}></Route>
            <Route path="/profill" element={<Content2 />}></Route>
          </Routes>
         
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default MyPage;
