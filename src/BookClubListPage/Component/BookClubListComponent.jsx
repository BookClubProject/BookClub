import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import "../BookClub.css"
import Spinner from 'react-bootstrap/Spinner';
import {Link} from "react-router-dom";
import "react-widgets/styles.css";
import Multiselect from "react-widgets/Multiselect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import apiTest from "../../Api.json";
import { useDispatch,useSelector } from 'react-redux';
import { fireEvent } from "@testing-library/react";

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
    color : "black",
    backgroundColor : "white",
    marginTop : "10px",
    border : "none",
    borderRadius : "5px",
  },
  imageSize : {
    width : "100%",
    height : "100%",
    backgroundColor : "#19ce60",
  },
  searchButton : {
    border : "1px solid black",
    padding : "0px"
  },
  inputSize : {
    width : "100%",
    height : "100%",
    border : "1px solid black",
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
const placeData = [
    { id: 1, place: "온라인" },
    { id: 2, place: "오프라인" },
];
const bookTemaData = [
  { id: 1, tema: "자기계발" },
  { id: 2, tema: "금융/경제" },
  { id: 3, tema: "인문학" },
  { id: 4, tema: "종교" },
  { id: 5, tema: "과학" },
];

const image = {
    searchImage: require('../../ImageSource/search.jpg'),
  }
  
function ClubList(){

  {/*도서검색관련*/}
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
      setSearch(event.target.value);
  };

  {/**독서모임 api 가져오기 및 로딩창 */}
  const [tempList, setTempList] = useState([]);
  const [clubList, setClubList] = useState([]);
  const [loading, setLoading] = useState(true);

  {/**온라인 오프라인 선택 */}
  const [place, setPlace] = useState();
  const [checkedPlace, setCheckedPlace] = useState();
  const getPlaceChange = (event) => {
    setCheckedPlace(event);
  };

  const [tema, setTema] = useState();
  const [checkedTema, setCheckedTema] = useState([]);
  const getTemaChange = (event) => {
    setCheckedTema(event);
  }


  {/**독서모임 검색 */}
  const searchBookClub = () =>{
    {/** 검색 분류 */}
    const sortSearchResult = tempList.filter((list) => list.booktitle.includes(search));

    {/** 온라인 오프라인 분류 */}
    const sortPlaceResult = sortSearchResult.reduce((accumulate, currentValue, index) =>{
      checkedPlace.map((list, index)=>{
        if(list.place === currentValue.state){
          accumulate.push(currentValue);
        }
      })
    return accumulate;
    }, [])

    console.log(sortPlaceResult);
    setClubList(sortPlaceResult);
  }


    
  {/** 달력 */}
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  {/**API 가져오기 */}
  const getClubList = async() =>{
        try {
          //const getClubList = await (await axios.get("https://50907063-b25d-4ab2-973c-8d4de9d0c872.mock.pstmn.io/book"));
          //setTempList(getClubList.data);
          //setClubList(getClubList.data); {/** api 가져오기 */} 
          setTempList(apiTest);
          setClubList(apiTest);
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
          <Spinner animation="border" />
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
                  value={search}
                  onChange={handleChange}
              />
            <button type="submit" style = {styles.searchButton}><img src={image.searchImage} style = {styles.imageSize} onClick = {searchBookClub}/></button>
          </div>
        </div>

        {/*추가분류*/}
        <div class = "sort-container">
          <div id = "toggleContainer">
            <div id = "toggleContent">지역 : 
            <Multiselect
              dataKey="id"
              textField="place"
              //defaultValue={[1]}
              data={placeData}
              onChange = {getPlaceChange}
            />
            </div>
          </div>
          <div id = "temaContainer">
            <div id = "temaContent">테마 : 
            <Multiselect
              data={bookTemaData}
              dataKey="id"
              textField="tema"
              onChange = {getTemaChange}
              //defaultValue={[1]}
            />
            </div>
          </div>
          <div id = "calendarContainer">
            <div id = "calendarContent">
              <span style = {{width : "60px"}}>시간 :</span> 
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
              />
            </div>
          </div>
        </div>
        <div class = "book-club-list-container">
          {clubList.map((list, index) => {
            return <Link to = {`/detail/${list.id}`} key={index} class="club-entity-container">
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
                    <div>{list.state}&nbsp;{list.location}&nbsp;{list.detailLocation}</div>
                    <div>시간 : {list.calendar}&nbsp;{list.time}</div>
                  </div>
              </div>      
            </Link>
          })}
        </div>  
        </>
      );
    }
}
export default ClubList;