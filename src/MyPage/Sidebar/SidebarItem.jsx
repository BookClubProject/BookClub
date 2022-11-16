import { fontSize } from "@mui/system";
import React from "react";
import "../Mypage.css";


function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className={"sidebar_item active"}>
      <p >{menu.title}</p>
    </div>
  ) : (
    <div className={"sidebar_item"}>
      <p>{menu.title}</p>
    </div>
  );
}

export default SidebarItem;
