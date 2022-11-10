import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import Banner from "./Component/Banner";
import BestSeller from "./Component/BestSeller";


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
        <TopMenuBarComponent />
        <Banner />
        <BestSeller />
        </div>
    );
}

export default TopMenu;