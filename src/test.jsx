import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';

function Test(){
  const [book, setBook] = useState(['']);

  {/**API 가져오기 */}
  const getSearchBook = async () => {
    try {
        const searchedBook = await axios.get('v1/search/book.json',{
            params:{
              query: '노르웨이의 숲',
              display: 1,
              start : 1,
              sort : 'sim'
            },
            headers: {
                'X-Naver-Client-Id': 'N1wOYMpUm3B1vs3zjGXr',
                'X-Naver-Client-Secret': 'VcXp345f98'
              },
          });
          setBook(searchedBook);
          console.log(searchedBook);
          console.log(book);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
    getSearchBook();
  }, []);
}

export default Test