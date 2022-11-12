import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import Bottom from "../PublicComponent/BottomComponent";
import Sidebar from "./Component/Sidebar";
import Content from "./Component/Content";
import TopInf from "./Component/TopInf";


const styles = {
  wrapper: {
    height: "100%",
    bottom: "0" /* 하단에 여백 없이 */,
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
          <Content />
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default MyPage;
