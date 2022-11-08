import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import "../BookClub.css"
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch,useSelector } from 'react-redux';

const styles = {
  title : {
    textAlign : "center",
    color : "white",
    paddingTop : "30px",
  },
  subTitle : {
    textAlign : "center",
    color : "white",
    fontWeight : "bold",
    marginTop : "30px",
  },
  sortText : {
    color : "white",
    textAlign : "center",
    marginTop : "10px",
  },
  imageSize : {
    width : "100%",
    height : "100%",
    backgroundColor : "green",
  },
  searchButton : {
    border : "1px solid black",
    padding : "0px"
  },
  inputSize : {
    width : "100%",
    height : "100%",
    border : "2px solid black",
    borderRight : "0px",
  },
  line : {
    border: "0.5px solid", 
    color: "silver", 
    width:"90%",  
    opacity: "0.4",
    margin : "0 0 8px 0px",
    marginBottom : "5px",
  }
}

const image = {
    // 사이트에 있는 이미지 가져오는 소스 
    searchImage: require('../../ImageSource/search.jpg'),
  }
  
function ClubList(){

  {/**독서모임 api 가져오기 및 로딩창 */}
  const [clubList, setClubList] = useState([]);
  const [loading, setLoading] = useState(true);

  {/**오프캔버스 */}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  {/**API 가져오기 */}
  const getClubList = async() =>{
        try {
          const getClubList = await (await axios.get("https://894a7a67-113b-453b-ad3b-578b44b1c2c2.mock.pstmn.io/booklist"));
          setClubList(getClubList.data); {/** api 가져오기 */} 
          setLoading(false); {/**로딩중 없애기 */}
        } catch {
          console.log("error");
          // 오류 발생시 실행
        }
  }

    useEffect(() => {
      getClubList();
    }, []);

    {/** 로딩화면 */}
    if(loading === true){
      return(
        <div>
          <Spinner animation="border" />;
        </div>
      );
    }

    else{
      {/** 책 리스트 */}
      return(
        <>
        <div class = "book-search-container">
          <h1 style = {styles.title}>독서모임을 찾아보세요!(멘트바꿔야함)</h1>
          <div style = {styles.subTitle}>여기엔 수많은 독서모임이 있습니다.(멘트바꿔야함)</div>
          <div class = "search-book-club-form">
            <input style = {styles.inputSize}
                  type="text"
                  placeholder="도서검색"
              />
            <button type="submit" style = {styles.searchButton}><img src={image.searchImage} style = {styles.imageSize}/></button>
          </div>
          {/*추가분류*/}
          <div onClick={handleShow} style = {styles.sortText}>
            추가분류
          </div>
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>분류</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            여기서 분류를 하면 우짤까
          </Offcanvas.Body>
        </Offcanvas>
        </div>

        <div class = "book-club-list-container">
          {clubList.map((list, index) => {
            return <div key={index} class="club-entity-container">
              <div id = "book-thumnail-container">
                <img src = {list.bookImage} id = "book-thumnail"/>
              </div>
              <div id = "thumnail-discription-container">

              <div id = "book-title-container">
                  <div id = "book-title">{list.booktitle}</div>
                  <div>{list.author}&nbsp;{list.publisher}</div>
              </div>
              
                  <div id = "plan-container">
                  <hr style={styles.line}/>
                    <div>{list.state}&nbsp;{list.location}&nbsp;{list.detailLocation}</div>
                    <div>시간 : {list.calendar}&nbsp;{list.time}</div>
                  </div>
              </div>      
            </div>
          })}
          {/**
          <img src = {clubList[0].bookImage}/>
          {clubList[0].calendar}
          {clubList[0].booktitle}
          {clubList[0].author}
          {clubList[0].price}
          {clubList[0].publishDay}
          {clubList[0].publisher}
          {clubList[0].time}
          {clubList[0].state}
          {clubList[0].location}
          {clubList[0].detailLocation}
          {clubList[0].id}
           */}
        </div>  
        </>
      );
    }
}
export default ClubList;