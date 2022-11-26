import "../HomePage.css";
import React from "react";
import {useState, useEffect} from "react";

function Content3() {
  const content3_1 =
    "체호프의 소설은 좋아했지만, 희곡은 읽기가 좀 어려웠었어요. 체호프 희곡읽기 주제에 관심이 있어 신청했습니다.떨리는 마음으로 접속했는데 선생님 목소리가 너무 좋으시고 발음이 정확하셔서 한번 깜짝 놀랐고,  희곡읽기뿐만 아니라 작가 소개와 짧게 ..";

  const content3_2 =
    "미국 아마존 금융ㆍ사업 분야 1위 국내 유명서점 10년간 종합 베스트셀러 가장 빠르게 부자 되는 새로운 공식을 제시해 큰 반향 불러일으킨 책 부자 되기 방식의 패러다임을 바꾼 〈부의 추월차선〉이 독자들의 사랑과 지지 속에 한국 출간 10주년을 맞이... ";

  const content3_3 =
    "제목부터 강렬하고 도발적인 프랑스 상징주의 대표시인 샤를 보들레르의 시집 《악의 꽃》이 더스토리 1857년 오리지널 초판본 표지디자인으로 새롭게 출간되었다. 이 시집은 시인 보들레르가 1840년대부터 쓰기 시작해서 갑자기 죽음을 맞은 1867년까지 쓴 운문으로 된 작품을 거의 다 싣고 있는 모음집이다.";

  const debate_contents = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const image = {
    testImage: require('../../ImageSource/imagetest.png'),
  }
  
  const bookData = [
    { image: require('../../ImageSource/Demian.jpg'), title : "데미안", tema: "자기계발",  author : '헤르만 헤세', pubdate : '1919', publisher : '조준희출판사', content : content3_1},
    { image: require('../../ImageSource/content2.jpg'), title : "부의 추월차선", tema: "금융/경제", author : '엠제이 드마코', pubdate : '2022.02.04', publisher : '토트', content : content3_2 },
    { image: require('../../ImageSource/content3.jpg'), title : "악의꽃", tema: "인문학", author : '샤를 피에르 보들레르', pubdate : '1857', publisher : '더스토리', content : content3_3 }
  ]

  return (
    <div className="content3_wrap">
      <div className="content3_left">
        <p className="content3_left_title">이달의 추천 도서</p>
        <div className="content3_list_container">
        <div id = "contentLeft">
          {bookData.map((list, index)=>{
            return <div id = "contentContainer" key={index}>
              <div id = "contentListContainer">
              <img src = {list.image} style = {{width : "120px", height : "150px"}}/>
              <div id = "titleContentContainer">
                <div id = "titleContainer">
                  <div id = "leftContentTitle">{list.title}</div>
                  <div id = "leftContentTema">{list.tema}</div>
                </div>

                <div id =  "leftContentAuthor">{list.author}</div>
                <div id =  "leftContentpubDate">{list.pubdate}</div>
                <div id =  "leftContentPublisher">{list.publisher}</div>
                <div id =  "leftContent">{list.content}</div>
              </div>
            </div>
            <div style = {{border : "0.5px solid gray", marginTop:"10px"}}/>
            </div>
          })}
          </div>
        </div>
      </div>
      <div className="conten3_right">
        <p className="content3_right_title"> 토론 후기 </p>
        <div className="content3_right_wrap">
          <div className="content3_debate_img">
            <img src="https://bimage.interpark.com/partner/goods_image/7/3/5/9/355777359h.jpg"></img>
          </div>
          <div className="content3_debate_write">
            {debate_contents}
          </div>
        </div>
        <button className="contetn3_right_add_button">더보기</button>
      </div>
    </div>
  );
}

export default Content3;
