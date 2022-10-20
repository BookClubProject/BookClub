import React from "react";
import {useEffect, useState} from "react";
import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import TopComponent from "./Component/TopViewComponent";
import Bottom from "../PublicComponent/BottomComponent";
import BookList from "./Component/FirstBookListComponent";
import Second from "./Component/SecondBookListComponent";
import Third from "./Component/ThirdBookListComponent";


const styles = {
    wrapper : {
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
        <TopComponent  />
        <BookList />
        <Second />
        <Third />
        <Bottom />
        </div>
    );
}

export default TopMenu;