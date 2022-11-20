import React from "react";
import "../../CompoCSS/Inquiry.css";
import { Button } from "@material-ui/core";
import DropdownList from "react-widgets/DropdownList";
import InquiryModal from "./InquiryModal.jsx";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";
import Posts from "./Posts";

const styles = {
  button: {
    background: "#8ec657",
    color: "white",
    border: "none",
    padding: "10px 30px",
    marginLeft: "auto",
    fontSize: "1.2rem",
  },
  number_data: {
    data_width: "10%",
  },
  id_data: {
    data_width: "15%",
  },
  title_data: {
    width: "40%",
  },
  date_data: {
    width: "20%",
  },
  state_data: {
    width: "15%",
  },
};

const selectBarData = [
  { id: 0, name: "해결" },
  { id: 1, name: "미해결" },
];

const data = [
  {
    number: 1,
    id: "나는나는",
    title: "안녕하세요",
    date: "2010-11-12",
    state: "미해결",
  },
  {
    number: 2,
    id: "나는나는",
    title: "안녕하세요",
    date: "2010-11-12",
    state: "미해결",
  },
  {
    number: 3,
    id: "나는나는",
    title: "안녕하세요",
    date: "2010-11-12",
    state: "해결",
  },
  {
    number: 4,
    id: "나는나는",
    title: "안녕하세요",
    date: "2010-11-12",
    state: "미해결",
  },
  {
    number: 5,
    id: "나는나는",
    title: "안녕하세요",
    date: "2010-11-12",
    state: "해결",
  },
  {
    number: 6,
    id: "나는나는",
    title: "안녕하세요",
    date: "2010-11-12",
    state: "미해결",
  },
];

function Inquiry() {
  const [inquiryModalOn, setInquiryModalOn] = useState(false);
  // 데이터 배열
  const [posts, setPosts] = useState([]);
  //데이터 로딩 완료 여부
  const [loading, setLoading] = useState(true);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 리스트 수
  const [postsPerPage, setPostsPerPage] = useState(2);

  useEffect(() => {
    setLoading(true);
    setPosts(data);
    // const fetchData = async () => {ㅇ
    //   setLoading(true);
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
    //   setPosts(response.data);
    //   setLoading(false);
    // };
    // fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div className="inquiry">
      <div className="inquiry_wrap">
        {/* 문의 유형, 문의하기버튼 */}
        <div className="inquiry_select_content">
          <div className="inquiry_select_bar">
            <DropdownList
              dataKey="id"
              textField="name"
              defaultValue={["해결"]}
              data={selectBarData}
            />
          </div>
          <Button style={styles.button} onClick={() => setInquiryModalOn(true)}>
            {" "}
            문의하기
          </Button>
          <InquiryModal
            show={inquiryModalOn}
            onHide={() => setInquiryModalOn(false)}
          />
        </div>
        {/* 문의내역 리스트 */}
        <div className="inquiry_content">
          <div className="inquiry_content_wrap">
            <div className="inquiry_main">
              <p className="inquiry_main_title">준희형이 문의한 내용이에요!</p>
              <Table striped bordered hover className="inquiry_title_table">
                {/* 타이틀부분 */}
                <thead className="inquiry_title_thead">
                  <tr className="inquiry_title_tr">
                    <th style={styles.number_data}>번호</th>
                    <th style={styles.id_data}>문의자</th>
                    <th style={styles.title_data}>제목</th>
                    <th style={styles.date_data}>문의일</th>
                    <th style={styles.state_data}>구분</th>
                  </tr>
                </thead>
                {/* 내용 부분 */}
                <tbody>
                  <Posts posts={currentPosts(posts)} loading={loading}></Posts>
                
                </tbody>
              
              </Table>
              <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    currentPage = {currentPage}
                    setCurrentPage={setCurrentPage}
                  ></Pagination>
            </div>
            <div className="inquiry_next"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
