import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import JoinComponent from "./Component/JoinComponent";
import Bottom from "../PublicComponent/BottomComponent";

const styles = {
    wrapper : {
        height : "100vh",
        width : "100%",
    },
    messageText : {
        color: "black",
        fontSize: 16,
    },
};


function LoginPage(){
    return(
        <div style = {styles.wrapper}>
        <TopMenuBarComponent />
        <JoinComponent />
        <Bottom />
        </div>
    );
}

export default LoginPage;