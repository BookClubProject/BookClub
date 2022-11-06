import React from "react";
import { useState } from "react";
import "./BottomComponent.css";

const styles = {
  wrapper: {
    padding: "30px 0",
    color: "#fff",
  },
};
function BottomComponent() {
  let [menu, setMenu] = useState([
    { data: "회사소개" },
    { data: "이용약관" },
    { data: "개인정보처리방침" },
    { data: "청소년보호정책" },
    { data: "대량주문안내" },
    { data: "채용정보" },
    { data: "광고소개" },
  ]);

  return (
    <footer className="footer_inner">
      <section className="footer_top">
        <div className="logo_box">
          <a href="https://www.naver.com/">Reading</a>
        </div>
        <div className="footer_contents_wrap">
          <div className="footer_menu_box">
            <ul className="footer_link">
              {menu.map((array) => {
                return (
                  <li className="footer_list">
                    {" "}
                    <a href="https://www.naver.com/">{array.data}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <div className="footer_division_line"></div>
      <section className="footer_bottom">
        <div className="left">
          <h4 className="company">(주)홍씨네짱</h4>
          <div className="contents">
            <p>
              사업자등록번호 : 123-45-67899 통신판매업신고 :
              세종대학교-학생회관-530호 대표 : 홍영환
            </p>
            <p>주소 : 서울시 구로구 경인로 248-29 기숙사 304호</p>
          </div>
        <p className="copyright">
          Copyright © 2018 HongSee Inc. All rights reserved
        </p>
        </div>
        <div className="right">
          <div className="sns_title">Follow US</div>
          <div className="sns_link">
            <a href="https://ko-kr.facebook.com/">
              <img src={"images/SNSIcon/facebook.png"}></img>
            </a>
            <a href="https://twitter.com/?lang=ko">
              <img src={"images/SNSIcon/twitter.png"}></img>
            </a>
            <a href="https://www.instagram.com/">
              <img src={"images/SNSIcon/instagram.png"}></img>
            </a>
            <a href="https://cs.kakao.com/helps?service=8">
              <img src={"images/SNSIcon/kakaotalk.png"}></img>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default BottomComponent;
