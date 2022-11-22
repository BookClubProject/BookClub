import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Pagination from "../Inquiry/Pagination";

const data = [
  {
    number: 1,
    book: "나는나는",
    title: "안녕하세요",
    signupdate: "2010-11-12",
    date: "2010-11-13",
    participant: "4명",
  },
  {
    number: 2,
    book: "나는나는",
    title: "안녕하세요",
    signupdate: "2010-11-12",
    date: "2010-11-13",
    participant: "4명",
  },
  {
    number: 3,
    book: "나는나는",
    title: "안녕하세요",
    signupdate: "2010-11-12",
    date: "2010-11-13",
    participant: "4명",
  },
  {
    number: 4,
    book: "나는나는",
    title: "안녕하세요",
    signupdate: "2010-11-12",
    date: "2010-11-13",
    participant: "4명",
  },
  {
    number: 5,
    book: "나는나는",
    title: "안녕하세요",
    signupdate: "2010-11-12",
    date: "2010-11-13",
    participant: "4명",
  },
  {
    number: 6,
    book: "나는나는",
    title: "안녕하세요",
    signupdate: "2010-11-12",
    date: "2010-11-13",
    participant: "4명",
  },
];
const styles = {
	number_data: {
	  data_width: "10%",
	},
	book_data: {
	  data_width: "15%",
	},
	title_data: {
	  width: "35%",
	},
	signupdate_data: {
	  width: "15%",
	},
	date_data: {
	  width: "15%",
	},
	participant_data: {
		width: "10%"
	}
  };

function RecordDetail() {
  // 데이터 배열
  const [posts, setPosts] = useState([]);
  //데이터 로딩 완료 여부
  const [loading, setLoading] = useState(true);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 리스트 수
  const [postsPerPage, setPostsPerPage] = useState(5);

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
    <div className="record_detail">
      <div className="record_detail_wrap">
        <p className="record_detail_title">준희형이 참여한 토론내역이에요!</p>
        <div className="record_table_wrap">
          <Table bordered hover className="record_title_table">
            {/* 타이틀부분 */}
            <thead className="record_title_thead">
              <tr className="record_title_tr">
                <th style={styles.number_data}>번호</th>
                <th style={styles.book_data}>책제목</th>
                <th style={styles.title_data}>토론제목</th>
                <th style={styles.signupdate_data}>신청시간</th>
                <th style={styles.date_data}>기간</th>
                <th style={styles.participant_data}>참여자</th>
              </tr>
            </thead>
            {/* 내용 부분 */}
            <tbody>
              {currentPosts(posts).map((post) => (
                <tr>
                  <td>{post.number}</td>
                  <td>{post.book}</td>
                  <td>{post.title}</td>
                  <td>{post.signupdate}</td>
                  <td>{post.date}</td>
                  <td>{post.participant}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
}

export default RecordDetail;
