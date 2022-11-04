import React from "react";
import { useState } from "react";
import "./BottomComponent";

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
    { data: "광고소개" }
  ]);

  return (
    <footer className="footer_inner">
      <div className="logo_box">
        <a href="https://www.naver.com/">로고자리입니다</a>
      </div>
      <div className="footer_contents_wrap">
        <div className="footer_menu_box">
          <ul className="footer_link">
            {menu.map((array) => {
              return <li> <a href="https://www.naver.com/">{array.data}</a></li>;
            })}
          </ul>
        </div>
        <div className="footer_info_box"></div>
        <div className="footer_copy_right"></div>
      </div>
    </footer>
  );
}

export default BottomComponent;
