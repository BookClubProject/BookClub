import React, { Component, useRef,useState, useEffect} from "react";
import StickyBox from "react-sticky-box";
import "../Write.css";

const styles = {
    search : {
        width : "70%",
        height : '100%',
        borderRadius : '5px',
        border : '1px solid #dee2e6',
    },
    searchButton : {
        marginLeft : '5px',
        height : '100%',
        width : '20%',
        borderRadius : '5px',
        border : '1px solid #dee2e6',
        minWidth : "40px",
    },
    title : {
      marginLeft: "3%",
      marginTop: "3%",
      fontWeight : "bold",
      fontSize : "20px",
    }
}

function EditorRightTopComponent(){

    {/*도서검색관련*/}
    const [search, setSearch] = React.useState("");
    const handleChange = event => {
        setSearch(event.target.value);
    };

    return (
      <StickyBox offsetBottom={340}>
        <div style = {styles.rightContainer}>
        <div class="book-container">

        <div class = "book-and-search-form">
          {/*책 표지*/}
          <img
            src="https://image.yes24.com/goods/106131562/XL"
            class="book-thumnail"
          />

        {/**책 표지 옆 세부사항 감싸는 컨테이너 */}
        <div class = "detail-container">
          {/*검색*/}
          <div class = "search-form">
              <input style = {styles.search}
                  type="text"
                  placeholder="도서검색"
                  value={search}
                  onChange={handleChange}
              />
              <button type="submit" style = {styles.searchButton}>검색</button>
          </div>
            <div style = {styles.title}>제목:</div>
            <div style = {styles.title}>저자:</div>
            <div style = {styles.title}>가격:</div>
            <div style = {styles.title}>출시일:</div>
            <div style = {styles.title}>출판사:</div>
          </div>
        </div>
      </div>
    </div>
  </StickyBox>
    );
}
export default EditorRightTopComponent