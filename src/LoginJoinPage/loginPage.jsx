import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import LoginComponent from "./Component/LoginComponent";
import Bottom from "../PublicComponent/BottomComponent";

const styles = {
    wrapper : {
        height : "100%",
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
        <LoginComponent />
        <Bottom />
        </div>
    );
}

export default LoginPage;