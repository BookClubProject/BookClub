import "../Mypage.css";
import { useState } from "react";
import styled from "styled-components";

function Sidebar() {
  const data = [
    {
      id: 0,
      title: "프로필",
    },
    {
      id: 1,
      title: "알림",
    },
    {
      id: 2,
      title: "회원정보수정",
    },
    {
      id: 3,
      title: "토론관리",
    },
    {
      id: 4,
      title: "토론승인",
    },
    {
      id: 5,
      title: "토론수정",
    },
    {
      id: 6,
      title: "참여토론",
    },
    {
      id: 7,
      title: "후기",
    },
    {
      id: 8,
      title: "토론참가취소",
    },
    {
      id: 9,
      title: "문의",
    },
    {
      id: 10,
      title: "문의내역",
    },
  ];



  return (
  <aside className="sidebar">
    <div className="sidebar_wrap">
      {/* {data.map((item) => (
         <div className="sidebar_menu">
          <h3 className="sidebar_title">대쉬보드</h3>
         </div>
      ))} */}
     안녕하세요
        

      {/* <p className="menu_title">프로필</p>
      <ul className="menu_list">
        <li>
          <a className="link_btn">알림</a>
        </li>
        <li>
          <a className="link_btn">회원정보수정</a>
        </li>
      </ul>
      <p className="menu_title">토론관리</p>
      <ul className="menu_list">
        <li>
          <a className="link_btn">토론승인</a>
        </li>
        <li>
          <a className="link_btn">토론수정</a>
        </li>
      </ul>
      <p className="menu_title">참여토론</p>
      <ul className="menu_list">
        <li>
          <a className="link_btn">후기</a>
        </li>
        <li>
          <a className="link_btn">토론참가 취소</a>
        </li>
      </ul>
      <p className="menu_title">문의</p>
      <li>
        <a className="link_btn">문의 내역</a>
      </li> */}



    </div>
  </aside>
  );
}

export default Sidebar;
