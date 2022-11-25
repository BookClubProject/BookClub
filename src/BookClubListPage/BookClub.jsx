import React from "react";
import TopMenuBarComponent from "../PublicComponent/TopMenuBarComponent";
import ClubListComponent from "./Component/BookClubListComponent";
import Bottom from "../PublicComponent/BottomComponent";
import {useEffect} from "react";

function BookClub(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
        <TopMenuBarComponent />
        <ClubListComponent />
        <Bottom />
        </div>
    );
}
export default BookClub;