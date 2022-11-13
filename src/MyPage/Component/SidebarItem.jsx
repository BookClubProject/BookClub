import React from "react";

function SidebarItem({ menu }) {
  return (
    <div className= {"sidebar_item btn"+ menu.id} >
      <p>{menu.title}</p>
    </div>
  );
}

export default SidebarItem;
