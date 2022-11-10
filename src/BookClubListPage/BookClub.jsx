import React from "react";
import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import ClubListComponent from "./Component/BookClubListComponent";
import Bottom from "../PublicComponent/BottomComponent";

function BookClub(){
    return(
        <div>
        <TopMenuBarComponent />
        <ClubListComponent />
        <Bottom />
        </div>
    );
}
export default BookClub;