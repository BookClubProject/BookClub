import "../Mypage.css";
import { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const data = [
    { id: 0, title: "프로필", path: "/mypage/profil" },
    { id: 1, title: "알림", path: "/mypage/notice" },
    { id: 2, title: "계정정보", path: "/mypage/editmember" },
    { id: 3, title: "토론관리", path: "/mypage/d2" },
    { id: 4, title: "토론승인", path: "/mypage/3" },
    { id: 5, title: "토론수정", path: "/mypage/4" },
    { id: 6, title: "참여토론", path: "/mypage/5" },
    { id: 7, title: "토론후기", path: "/mypage/6" },
    { id: 8, title: "토론참가취소", path: "/mypage/7" },
    { id: 9, title: "문의하기", path: "/mypage/8" },
    { id: 10, title: "문의내역", path: "/mypage/9" },
  ];
  const pathName = useLocation().pathname;

  return (
    <aside className="sidebar">
      <div className="sidebar_wrap">
        {data.map((menu, index) => {
          return (
            <NavLink
            exact
            style={{color: "black", textDecoration: "none"}}
            to={menu.path}
            key={index}
            className="sidebar_btn"
            >
              <SidebarItem
                menu={menu}
                isActive = {pathName === menu.path ? true : false}
              />
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
