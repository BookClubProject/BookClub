import "../../CompoCSS/Profil.css";
import ProfilModal from "./ProfilModal.jsx";
import { useState } from "react";
import React from "react";

const styles = {
  wrapper: {
    background: "blue",
  },
  content_div: {
    wordBreak: "break-all",
    maxWidth: "100%",
  },
  
};

function Profil() {
  const [profilModalOn, setProfilModalOn] = useState(false);
  const [content, setContent] = useState({
    title: "",
    content: "소개글이 존재하지 않습니다.",
  });
  const data = [
    { id: 1, title: "프로필", content: "안녕하세요" },
    { id: 2, title: "알림", content: "안녕하세요" },
    { id: 3, title: "계정정보", content: "안녕하세요" },
    { id: 4, title: "토론관리", content: "안녕하세요" },
  ];
  return (
    <div className="wrap">
      <div className="inner_wrap">
        <div className="introduction">
          <div className="introduction_top">
            <p className="title">소개</p>
            <button
              className="change_btn"
              onClick={() => setProfilModalOn(true)}
            >
              편집
            </button>
          </div>
          <ProfilModal
            show={profilModalOn}
            onHide={() => setProfilModalOn(false)}
            content={content}
            setContent={setContent}
          />
          <div className="profil_introduction_main">
            <div className="profil_main_title">{content.title}</div>
            <div style={styles.content_div} className="profil_main_contents">
              {content.content}
            </div>
          </div>
        </div>
        <div className="division_line"></div>
        <div className="review">
          <p className="title">토론후기</p>
          <div className="list">
            <div className="review_list">
              {data.map((item) => {
                return (
                  <a className="review_link_component">
                    <div className="review_link_inner">
                      <h3>
                        {item.id}. {item.title}
                      </h3>
                      <p> {item.content}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
