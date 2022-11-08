import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';

function ClubListApi(){

  const [clubList, setClubList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getClubList = async() =>{
        try {
          const getClubList = await (await axios.get("https://894a7a67-113b-453b-ad3b-578b44b1c2c2.mock.pstmn.io/booklist"));
          setClubList(getClubList.data); {/** api 가져오기 */} 
          setLoading(false); {/**로딩 */}
        } catch {
          console.log("error");
          // 오류 발생시 실행
        }
  }

    useEffect(() => {
        getClubList();
    }, []);

    return(
        <div>
            {loading ?  <h1>loading...</h1> : <div>asd</div>}
        </div>  
    );
    
}
export default ClubListApi;