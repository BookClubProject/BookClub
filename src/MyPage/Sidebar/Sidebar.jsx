import "../Mypage.css";
import { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";


function Sidebar() {
  const data = [
    { id: 0, title: "프로필", path: "/mypage/profil" },
    { id: 1, title: "알림", path: "/mypage/notice" },
    { id: 2, title: "계정정보", path: "/mypage/editmember" },
    { id: 3, title: "토론관리", path: "/mypage/manage" },
    { id: 4, title: "토론수정", path: "/mypage/edit" },
    { id: 5, title: "토론후기", path: "/mypage/review" },
    { id: 6, title: "참여토론", path: "/mypage/discussion/records" },
    { id: 7, title: "문의", path: "/mypage/inquiry" },
  ];
  const pathName = useLocation().pathname;

  // 사용자가 예약한 토론의 수
  const [bookCount, setBookCount] = useState(2);
  // 사용자가 만든 토론의 수
  const [createCount, setCreateCount] = useState(0);

  return (
    <aside className="sidebar">
      <div className="sidebar_sub_profil">
        <div className="sidebar_sub_profil_top">
          <span className="sidebar_profil_icon">
            <a href="https://ko-kr.facebook.com/">
              <BsPersonCircle size="50" color="rgb(213, 211, 211)" />
            </a>
          </span>
          <h2 className="side_bar_profil_name">조준희님</h2>
          <span className="sidebar_bell_icon">
            <a href="https://ko-kr.facebook.com/">
              <BsFillBellFill size={20} color="rgb(231, 235, 133)" />
            </a>
          </span>
        </div>
        <div className="sidebar_sub_profil_bottom">
          <div className="sidebar_user_book_list">
            <p>토론예약</p>
            <a className="sidebar_user_p" href="https://ko-kr.facebook.com/"><p >{bookCount}</p></a>
          </div>

          <div className="seperate_line"></div>

          <div className="sidebar_user_create_book">
            <p>생성토론</p>
            <a className="sidebar_user_p" href="https://ko-kr.facebook.com/" ><p >{createCount}</p></a>
          </div>
        </div>
      </div>

      <div className="sidebar_wrap">
        {data.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{ color: "black", textDecoration: "none" }}
              to={menu.path}
              key={index}
              className="sidebar_btn"
            >
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
