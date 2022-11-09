import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';

function Test(){
    const [api, setApi] = useState('');

    const option ={
            url : 'https://openapi.naver.com/v1/search/book.json',
            params:{
                query: '삼국지',
                display: 10,
                start : 1,
              },
            headers: {
                'X-Naver-Client-Id':process.env.REACT_APP_CLIENT_ID,
                'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
            },
        }

        {/**API 가져오기 */}
    const getBookApi = async() =>{
        try {
        const api = await (await axios.get(option));
        setApi(api); {/** api 가져오기 */} 
        console.log(api);
        } catch {
        console.log("error");
        // 오류 발생시 실행
        }
    }
    const ID_KEY = 'mT8QQrmD4w7I5tcpqexQ';
    const SECRET_KEY = 'oh6xEebpVb';
    const search = '검사외전';

    const getSearchMovie = async () => {
        try {
            const items = await axios.get('v1/search/book.json',{
                params:{
                  query: '노르웨이의 숲',
                  display: 1,
                  start : 1,
                  sort : 'sim'
                },
                headers: {
                  'X-Naver-Client-Id': ID_KEY,
                  'X-Naver-Client-Secret': SECRET_KEY
                },
              }).then((response) => {
                console.log('response', response.data);  // 영화 리스트
              }); 
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        getSearchMovie();
      }, []);
    return(
        <div>
            asdkasd;klasl;
            {api.title}
        </div>
    );
}

export default Test