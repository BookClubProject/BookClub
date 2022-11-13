import React from "react";

function SidebarItem({ menu, isActive }) {
  return isActive == true ? (
    <div className="sidebar_item active">
      <p>{menu.title}</p>
    </div>
  ) : (
    <div className="sidebar_item">
      <p>{menu.title}</p>
    </div>
  );
}

export default SidebarItem;
