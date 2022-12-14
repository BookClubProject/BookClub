import Header from "../PublicComponent/TopMenuBarComponent";
import Banner from "./Component/Banner";
import BestSeller from "./Component/BestSeller";
import Footer from "../PublicComponent/BottomComponent";
import Content1 from "./Component/Content1";
import Content3 from "./Component/Content3";

const styles = {
  wrapper: {
    height: "100%",
    bottom: "0" /* 하단에 여백 없이 */,
    width: "100%" /* 가로 사이즈를 브라우저에 가득 채움 */,
    // fontFamily: "Jua, sans-serif",
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};


function TopMenu() {
  return (
    <div style={styles.wrapper}>
      <Header />
      <Banner />
      <Content1 />

      <Content3 />
      <BestSeller />
      <Footer />
    </div>
  );

}
// <BestSeller />
export default TopMenu;
