import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../Inquiry/Pagination";
import RecordCancelPosts from "./RecordCancelPosts";
import Grid from "@material-ui/core/Grid";
import apiTest from "../../../Api.json";

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

function RecordCancel() {
  // 데이터 배열
  const [posts, setPosts] = useState([]);
  //데이터 로딩 완료 여부
  const [loading, setLoading] = useState(true);
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 보여줄 리스트 수
  const [postsPerPage, setPostsPerPage] = useState(4);
  // 독서모임 api 가져오기
  const [clubList, setClubList] = useState([]);
  {/**API 가져오기 */}
  const getClubList = async() =>{
    try {
      //const getClubList = await (await axios.get("https://50907063-b25d-4ab2-973c-8d4de9d0c872.mock.pstmn.io/book"));
      //setTempList(getClubList.data);
      //setClubList(getClubList.data); {/** api 가져오기 */} 
      setClubList(apiTest);
    } catch {
      console.log("error");
      // 오류 발생시 실행
    }
}
  useEffect(() => {
    setLoading(true);
    setPosts(data);
    getClubList();
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
    <div className="record_cancel">
      <div className="record_cancel_wrap">
        <p className="record_cancel_title">신청한 토론을 취소하시겠어요?</p>
        <div className="record_cancel_content_wrap">
          <Grid container spacing={2}>
            {currentPosts(clubList).map((list,index) => (
              <RecordCancelPosts list={list} index={index}/>
            ))}
          </Grid>
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

export default RecordCancel;
