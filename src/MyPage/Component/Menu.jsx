import "../Mypage.css";
import { useState } from "react";

function Menu() {
  const profil = [
    {
      id: 0,
      title: "알림",
    },
    {
      id: 1,
      title: "회원정보수정",
    },
  ];

  const management = [
    {
      id: 2,
      title: "토론승인",
    },
    {
      id: 3,
      title: "토론수정",
    },
  ];

  const participation = [
    {
      id: 4,
      title: "후기",
    },
    {
      id: 5,
      title: "토론취소",
    },
  ];

  const inquiry = [
    {
      id: 6,
      title: "문의하기",
    },
    {
      id: 7,
      title: "문의내역",
    },
  ];
  <aside className="sidebar_left">
    <div className="menu_container">
      <p className="menu_title">프로필</p>
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
      </li>
    </div>
  </aside>;
}

export default Menu;
