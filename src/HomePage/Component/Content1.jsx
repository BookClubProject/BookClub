import "../HomePage.css";
import Content2 from "./Content2";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import apiTest from "../../Api.json";
import {Link} from "react-router-dom";



function Content1() {
  const styles = {
    line : {
      border: "0.5px solid", 
      color: "silver", 
      width:"90%",  
      opacity: "0.4",
      margin : "0 0 8px 0px",
      marginBottom : "5px",
    },
  }
  let [btnData, setbtnData] = useState([
    { id: 1, name: "자기계발", active: true },
    { id: 2, name: "금융/경제", active: false },
    { id: 3, name: "인문학", active: false },
    { id: 4, name: "종교", active: false },
    { id: 5, name: "과학", active: false },
  ]);

  let [image, setImage] = useState(1);

  const onClick = (item) => {
    let result = btnData.map((k) => {
      if (k.id === item.id) {
        return {
          ...k,
          active: true,
        };
      } else {
        return {
          ...k,
          active: false,
        };
      }
    });
    setbtnData(result);
    setImage((prev) => item.id);
  };

    {/**독서모임 api 가져오기 및 로딩창 */}
    const [tempList, setTempList] = useState([]);
    const [clubList, setClubList] = useState([]);

    {/**API 가져오기 */}
    const getClubList = async() =>{
      try {
        //const getClubList = await (await axios.get("https://50907063-b25d-4ab2-973c-8d4de9d0c872.mock.pstmn.io/book"));
        //setTempList(getClubList.data);
        //setClubList(getClubList.data); {/** api 가져오기 */} 
        setTempList(apiTest);
        setClubList(apiTest);
      } catch {
        console.log("error");
        // 오류 발생시 실행
      }
  }
  {/**분류하기 */}
  const sortBookList = (item) =>{
    const sortSearchResult = tempList.filter((list) => list.tema.includes(item.name));
    setClubList(sortSearchResult);
  }
  {/**모임 리스트 나열*/}
  useEffect(() => {
    getClubList();
  }, []);

  return (
    <>
    <div id = "contentMainContainer">
      <div id = "mainContentText">지금 가장 인기있는 독서 모임 🔥</div>
    </div>
    <article className={"Content1 backGround"+image}>
      <section className="Content1-session">
        <p className="Maintitle">준희형이 추천하는 5가지 독서카테고리</p>
        <p className="Subtitle">
          책을 즐기는 다양한 방법, 준희에게 물어보세요!
        </p>
        <div className="Content-btn">
          <ul>
            {btnData.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  onClick={() => (onClick(item), sortBookList(item))}
                  className ={(item.active === true
                         ? "category_btn " + "active on" +item.id
                         :"category_btn " + item.id)}
                >
                  {item.name}
                </button>
              );  
            })}
          </ul>
        </div>
      </section>
    </article>
    <div class = "Content2">
          {clubList.map((list, index) => {
            return <Link to = {`/detail/${list.id}`} key={index} class="content2_wrap">

              <div id = "book-thumnail-container">
                <img src = {list.bookImage} id = "book-thumnail"/>
              </div>
              <div id = "thumnail-discription-container">

              <div id = "book-title-container">
                  <div id = "book-title">{list.booktitle}</div>
                  <div id = "sub-title">{list.author}&nbsp;{list.publisher}</div>
              </div>
              
                  <div id = "plan-container">
                  <hr style={styles.line}/>
                    <div>{list.tema}&nbsp;{list.state}&nbsp;{list.location}&nbsp;{list.detailLocation}</div>
                    <div>시간 : {list.year}.{list.month}.{list.date}{list.day}&nbsp;{list.time}</div>
                  </div>
              </div>      
            </Link>
          })}
        </div>  


      <div className="content2_btn_wrap">
      <Link to = {`/clublist`}>
        <button className="content2_add_look_btn">더보기</button>
        </Link>
      </div>
    </>
  );
}

export default Content1;
