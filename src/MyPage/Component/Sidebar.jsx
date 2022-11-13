import "../Mypage.css";
import { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const data = [
    { id: 0, title: "프로필", path: "/mypage" },
    { id: 1, title: "알림", path: "/mypage" },
    { id: 2, title: "회원정보수정", path: "/mypage" },
    { id: 3, title: "토론관리", path: "/mypage" },
    { id: 4, title: "토론승인", path: "/mypage" },
    { id: 5, title: "토론수정", path: "/mypage" },
    { id: 6, title: "참여토론", path: "/mypage" },
    { id: 7, title: "후기", path: "/mypage" },
    { id: 8, title: "토론참가취소", path: "/mypage" },
    { id: 9, title: "문의", path: "/mypage" },
    { id: 10, title: "문의내역", path: "/mypage" },
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
            activeStyle={{color: "yellow"}}
            >
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </NavLink>
          );
          //  <div className="sidebar_menu">
          //   <h3 className="sidebar_title">대쉬보드</h3>
          //  </div>
        })}
        안녕하세요
      </div>
    </aside>
  );
}

export default Sidebar;
