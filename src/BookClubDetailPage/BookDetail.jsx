import React from "react";
import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import DetailComponent from "./BookDetailComponent/DetailComponent"
import Bottom from "../PublicComponent/BottomComponent";

const BookDetail = () => {
    return(
        <div>
            <TopMenuBarComponent />
            <DetailComponent />
            <Bottom />
        </div>
    )
}
export default BookDetail