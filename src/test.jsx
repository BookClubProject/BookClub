import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';

function Test(){
    const [api, setApi] = useState('');

    const option ={
        url : 'https://openapi.naver.com/v1/search/book.json',
         method:'POST',
         header:{
           'Accept':'application/json',
           'Content-Type':'application/json charset=UTP-8'
        },
        data:{
            name:'sewon',
              age:20
        }
    }
        {/**API 가져오기 */}
    const getBookApi = async() =>{
        try {
        const getClubList = await (await axios.get("https://openapi.naver.com/v1/search/book.json"));
        setApi(getClubList.data); {/** api 가져오기 */} 
        } catch {
        console.log("error");
        // 오류 발생시 실행
        }
    }
    useEffect(() => {
        getBookApi();
      }, []);
    return(
        <div>
            asdkasd;klasl;
            
        </div>
    );
}

export default Test