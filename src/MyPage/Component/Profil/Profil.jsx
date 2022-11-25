import "../../CompoCSS/Profil.css";
import ProfilModal from "./ProfilModal.jsx";
import { useState, useEffect } from "react";
import React from "react";
import { Button } from "@material-ui/core";
import Pagination from "../Inquiry/Pagination";
import axios from 'axios';

const styles = {
  wrapper: {
    background: "blue",
  },
  content_div: {
    wordBreak: "break-all",
    maxWidth: "100%",
  },
  change_btn: {
    background: "#8ec657",
    color: "white",
    width: "100px",
    margin: "10px",
    fontSize: "1.2rem",
    marginLeft: "auto",
  },
};

function Profil() {

  const [profilModalOn, setProfilModalOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState({
    title: "",
    content: "소개글이 존재하지 않습니다.",
  });
  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'https://3f262444-474c-47f0-a635-7a8abda2e572.mock.pstmn.io/profil'
      );
      setContent(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const data = [
    { id: 1, title: "프로필", content: "안녕하세요" },
    { id: 2, title: "알림", content: "안녕하세요" },
    { id: 3, title: "계정정보", content: "안녕하세요" },
    { id: 4, title: "토론관리", content: "안녕하세요" },
  ];
  // 토론후기 데이터
  const [posts, setPosts] = useState([]);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 리스트 수
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  useEffect(() => {
    // 프로필 소개
    fetchUsers();
    // 토론후기
    setPosts(data);
  }, []);

  return (
    <div className="wrap">
      <div className="inner_wrap">
        {/* 소개 */}
        <div className="introduction">
          <div className="introduction_top">
            <p className="title">소개</p>
            <Button
              style={styles.change_btn}
              onClick={() => setProfilModalOn(true)}
            >
              편집
            </Button>
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
        {/* 후기 */}
        <div className="review">
          <p className="title">토론후기</p>
          <div className="list">
            <div className="review_list">
              {currentPosts(posts).map((item) => {
                return (
                  <a href="www.naver.com" className="review_link_component">
                    <div className="review_link_inner">
                      <h3>
                        {item.id}. {item.title}
                      </h3>
                      <p> {item.content}</p>
                    </div>
                  </a>
                );
              })}
               <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Pagination>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
