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
import { getYear, getMonth, getDate, getDay } from "date-fns";

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
    padding : "0px",
    width: "40px",
    height: "40px",
    border: "#ccc 1px solid",
    boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",
    borderRadius: "4px",
  },
  line : {
    border: "0.5px solid", 
    color: "silver", 
    width:"90%",  
    opacity: "0.4",
    margin : "0 0 8px 0px",
    marginBottom : "5px",
  },
  bookText : {
    width : "60px",
    height : "70%",
    fontSize: "20px",
    margin: "auto",
    marginTop: "10px",
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
  const [checkedPlace, setCheckedPlace] = useState([{id: 1, place: '온라인'}, {id: 2, place: '오프라인'}]);
  const getPlaceChange = (event) => {
    setCheckedPlace(event);
  };
  {/**달력 */}
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dateCheck, setDateCheck] = useState(false);

  {/**테마 */}
  const [tema, setTema] = useState();
  const [checkedTema, setCheckedTema] = useState([
    {id: 1, tema: '자기계발'}, 
    {id: 2, tema: '금융/경제'}, 
    {id: 3, tema: '인문학'}, 
    {id: 4, tema: '종교'},
    {id: 5, tema: '과학'}]);
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

    {/** 테마 분류 */}
    const sortTema = sortPlaceResult.reduce((accumulate, currentValue, index) =>{
      checkedTema.map((list, index)=>{
        if(list.tema === currentValue.tema){
          accumulate.push(currentValue);
        }
      })
    return accumulate;
    }, [])

    {/** 시간 분류 */}
      let endYear = parseInt(getYear(endDate)) * 10000;
      let endMonth = parseInt(getMonth(endDate) + 1) * 100;
      let endDay = parseInt(getDate(endDate));

      let startYear = parseInt(getYear(startDate)) * 10000;
      let startMonth = parseInt(getMonth(startDate) + 1) * 100;
      let startDay = parseInt(getDate(startDate));

      const sortDate = sortTema.reduce((accumulate, currentValue, index) =>{
      let currentYear = parseInt(currentValue.year) * 10000;
      let currentMonth = parseInt(currentValue.month) * 100;
      let currentDay = parseInt(currentValue.date);
      let currentSum = currentYear + currentMonth + currentDay;

      for(index = startYear + startMonth + startDay; index <= endYear + endMonth + endDay; index++){
        if(index === currentSum){
          accumulate.push(currentValue);
        }
      }
      return accumulate;
    }, [])

    if(dateCheck){
      setClubList(sortDate);
    }
    else{
      setClubList(sortTema);
    }
  }

  {/** 온라인 오프라인 초기화*/}
  const placeSetting = () =>{
    setCheckedPlace(
      [{id: 1, place: '온라인'}, {id: 2, place: '오프라인'}]
    )
  }

  {/** 테마 초기화*/}
  const temaSetting = () =>{
    setCheckedTema(
      [
        {id: 1, tema: '자기계발'}, 
        {id: 2, tema: '금융/경제'}, 
        {id: 3, tema: '인문학'}, 
        {id: 4, tema: '종교'},
        {id: 5, tema: '과학'}
      ]
    )
  }

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

  {/**장소 아무것도 체크 안하고 검색 시 초기화 */}
  useEffect(() => {
    if(checkedPlace.length === 0){
      placeSetting();
    }
  }, [checkedPlace]);

  {/**테마 아무것도 체크 안하고 검색 시 초기화 */}
  useEffect(() => {
    if(checkedTema.length === 0){
      temaSetting();
    }
  }, [checkedTema]);

  {/**시간 아무것도 체크 안하고 검색 시 초기화 */}
  useEffect(() => {
    if(startDate === null || endDate === null){
      setDateCheck(false);
    }
    else if(startDate !== null && endDate !== null){
      setDateCheck(true);
    }
  }, [startDate, endDate]);

  {/**모임 리스트 나열*/}
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
        </div>

        {/*추가분류*/}
        <div class = "sort-container">

        <div id = "searchContainer">
          <span style = {styles.bookText}>도서 :</span> 
        <div id = "searchContent">
            <input id = "inputSize"
                  type="text"
                  placeholder="도서검색"
                  value={search}
                  onChange={handleChange}
              />
            <button type="submit" style = {styles.searchButton}><img src={image.searchImage} style = {styles.imageSize} onClick = {searchBookClub}/></button>
            </div>
          </div>
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
              <span style = {{width : "55px"}}>시간 :</span> 
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                withPortal
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
                    <div>{list.tema}&nbsp;{list.state}&nbsp;{list.location}&nbsp;{list.detailLocation}</div>
                    <div>시간 : {list.year}.{list.month}.{list.date}{list.day}&nbsp;{list.time}</div>
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