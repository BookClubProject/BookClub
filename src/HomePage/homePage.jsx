
import Header from "../PublicComponent/TopMenuBarComponent";
import Banner from "./Component/Banner";
import BestSeller from "./Component/BestSeller";
import Footer from "../PublicComponent/BottomComponent"
import Content1 from "./Component/Content1";
import Content2 from "./Component/Content2";
import Content3 from "./Component/Content3";
import Content4 from "./Component/Content4";
import Content5 from "./Component/Content5";


const styles = {
    wrapper : {
        height:"100px",
        bottom: "0", /* 하단에 여백 없이 */
        width: "100%", /* 가로 사이즈를 브라우저에 가득 채움 */
    },
    messageText : {
        color: "black",
        fontSize: 16,
    },
};

function TopMenu(){

    return(
        <div style = {styles.wrapper}>
        <Header />
        <Banner />
        <Content1/>
        <Content2/>
        <Content3/>
        <Content4/>
        <Content5/>
        <Footer />
      
        </div>
    );
}
// <BestSeller />
export default TopMenu;