import React, { Component, useState, useEffect} from "react";

import Switch from "react-switch";
import "../Write.css";

const { kakao } = window;

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
    rightContainer : {
      display: "flex",
      flex : "1",
    },
    title : {
      marginLeft: "3%",
      marginTop: "3%",
      fontWeight : "bold",
      fontSize : "20px",
    }
}

function EditorRightTopComponent(props){
    {/*토글버튼관련*/}
    const [state, setChecked] = useState(true);
    const onChange = () =>{
        if(state === false) setChecked(true);
        else setChecked(false);
    }

    {/*도서검색관련*/}
    const [search, setSearch] = React.useState("");
    const handleChange = event => {
        setSearch(event.target.value);
    };

    return (
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

        
        {/*온라인 오프라인 설정
        <div className="example">
          <label htmlFor="material-switch">
            <Switch
              checked={state}
              onChange={onChange}
              handleDiameter={28}
              offColor="#e5f3ff"
              onColor="#000000"
              offHandleColor="#ffffff"
              onHandleColor="#ffffff"
              height={40}
              width={100}
              borderRadius={6}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40px",
                    fontSize: 15,
                    color: "black",
                    paddingRight: 2,
                  }}
                >
                  오프라인
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "white",
                    paddingRight: 2,
                  }}
                >
                  온라인
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 20,
                  }}
                >
                  👥
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "red",
                    fontSize: 18,
                  }}
                >
                  🖥
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </label>
        </div>
      */} 
        

      </div>
    </div>
    );
}
export default EditorRightTopComponent