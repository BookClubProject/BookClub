import "../HomePage.css";
import apiTest from "../../Api.json";
import { useEffect, useState } from "react";



function Content2() {
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
{/**모임 리스트 나열*/}
useEffect(() => {
  getClubList();
}, []);

  return (
    <div className="Content2">
      <div className="content2_wrap">
        <div className="content2_book_list_wrap">
          <div className="content2_book_list"> 
          Content2
          </div>
        </div>
      </div>
      <div className="content2_btn_wrap">
        <button className="content2_add_look_btn">더보기</button>
      </div>
    </div>
  );
}

export default Content2;
