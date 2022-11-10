import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StickyBox from "react-sticky-box";
import axios from 'axios';
import "../Write.css";
import { List } from '@mui/material';

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
    },
    author : {
      marginLeft: "3%",
      marginTop: "3%",
    },
    pubdate : {
      marginLeft: "3%",
      marginTop: "3%",
    },
    publisher : {
      marginLeft: "3%",
      marginTop: "3%",
    },
    modalSearch : {
      height : "30px",
      width : "380px",
      border : "1px solid green",
      margin : "10px",
      borderRadius : "5px"
    },
    modalSearchButton : {
      height : "30px",
      width : "80px",
      border : "1px solid green",
      borderRadius : "5px",
      backgroundColor : "white",
      color : "green"
    }
};
const image = {
  bookCover: require('../../ImageSource/Demian.jpg'),
}

function EditorRightTopComponent(){

    {/*도서검색관련*/}
    const [search, setSearch] = useState('');
    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    {/**다이얼로그 도서검색*/}
    const [naverBook, setNaverBook] = useState('');
    const searchNaverBook = (event) =>{
      setNaverBook(event.target.value);
    }

    {/**다이얼로그 관련 */}
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [book, setBook] = useState([]);

    const [pickBook, setPickBook] = useState({image : image.bookCover, title : '데미안', author : '헤르만 헤세', pubdate : '1919', publisher : ''});

    const selectBook = (list) => {
      setPickBook(list);
      console.log(list);
    }

    {/**API 가져오기 */}
    const getSearchBook = async () => {
      try {
          const searchedBook = await axios.get('v1/search/book.json',{
              params:{
                query: naverBook,
                display: 10,
                start : 1,
                sort : 'sim'
              },
              headers: {
                  'X-Naver-Client-Id': 'mT8QQrmD4w7I5tcpqexQ',
                  'X-Naver-Client-Secret': 'oh6xEebpVb'
                },
            });
            setBook(searchedBook.data.items);
            console.log(searchedBook.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    

    return (
      <StickyBox offsetBottom={250}>
        <div style = {styles.rightContainer}>
        <div class="book-container">

        <div class = "book-and-search-form">
          {/*책 표지*/}
          <img
            src={pickBook.image} 
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
                  disabled={false}
              />
              <button type="submit" style = {styles.searchButton} onClick = {handleShow}>검색</button>
          </div>
        {/*다이얼로그*/}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>도서 검색</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input style = {styles.modalSearch}
                  type="text"
                  placeholder="도서검색"
                  value={naverBook}
                  onChange={searchNaverBook}
          />
          <button type="submit" style = {styles.modalSearchButton} onClick = {getSearchBook}>검색</button>
          {book.map((list, index) => {
              return <div key = {index} id = "searched-book-list" onClick={() => (selectBook(list), handleClose())}>
                <img src = {list.image} id = "searched-book-image"/>
                <div id = "searched-book-text-container">
                  <div>제목 : {list.title}</div>
                  <div>작가 : {list.author}</div>
                  <div>출판사 : {list.publisher}</div>
                  <div>출간일 : {list.pubdate}</div>
                </div>
              </div>
          })}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
            <div id = "detail-text-container">
              <hr/>
              <div style = {styles.title}>{pickBook.title}</div>
              <div style = {styles.author}>저자 : {pickBook.author}</div>
              <div style = {styles.pubdate}>출간일 : {pickBook.pubdate}</div>
              <div style = {styles.publisher}>출판사 : {pickBook.publisher}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StickyBox>
    );
}
export default EditorRightTopComponent