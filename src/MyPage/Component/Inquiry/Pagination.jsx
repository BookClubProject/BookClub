import React from "react";
import Paginate from "react-js-pagination";
import "../../CompoCSS/Pagination.css"
const Pagination = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }) => {

//postsPerPage 한번에 보여줄 리스트 수
//totalPosts 데이터의 총 수
//paginate 현재페이지 세팅하는 함수
  return (
    <Paginate
      activePage={currentPage}
      itemsCountPerPage={postsPerPage}
      totalItemsCount={totalPosts}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setCurrentPage}
    />
  );
};

export default Pagination;
