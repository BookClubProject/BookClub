import React from "react";
import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import ClubListComponent from "./Component/BookClubListComponent";

function BookClub(){
    return(
        <div>
        <TopMenuBarComponent />
        <ClubListComponent />
        </div>
    );
}
export default BookClub;