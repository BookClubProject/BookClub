import React from "react";
import "../../CompoCSS/Manage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ManageAcceptPost from "./ManageAcceptPost.jsx";
import ManageApplicationPost from "./ManageApplicationPost.jsx";
import Box from "@mui/material/Box";
import { FixedSizeList } from 'react-window';


// import './slick.css';
// import './slick-theme.css';

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    line-height: 1;

    opacity: 0.75;
    color: yellowgreen;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-prev {
    left: -46px;
  }
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: yellowgreen;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: yellowgreen;
  }
`;
const settings = {
  dots: true, // 점 여부
  arrows: true, // 화살표여부
  infinite: true, // 무한 반복 옶녀
  speed: 500, //버튼 누르고 바뀌는 동안 시간
  slidesToShow: 1, //한 화면에 보이는 수
  slidesToScroll: 1, // 스크롤 한번에 움직이는 수
};
const bookData = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
];

const acceptData = [
  { id: 0, name :"조준희"}, { id: 1, name :"조준희"}, { id: 2, name :"조준희"}, { id: 3, name :"조준희"}, { id: 4, name :"조준희"}, { id: 5, name :"조준희"},
  { id: 0, name :"조준희"}, { id: 1, name :"조준희"}, { id: 2, name :"조준희"}, { id: 3, name :"조준희"}, { id: 4, name :"조준희"}, { id: 5, name :"조준희"},
  { id: 0, name :"조준희"}, { id: 1, name :"조준희"}, { id: 2, name :"조준희"}, { id: 3, name :"조준희"}, { id: 4, name :"조준희"}, { id: 5, name :"조준희"},
  { id: 0, name :"조준희"}, { id: 1, name :"조준희"}, { id: 2, name :"조준희"}, { id: 3, name :"조준희"}, { id: 4, name :"조준희"}, { id: 5, name :"조준희"},
  { id: 0, name :"조준희"}, { id: 1, name :"조준희"}, { id: 2, name :"조준희"}, { id: 3, name :"조준희"}, { id: 4, name :"조준희"}, 

]
function Manage() {

  return (
    <div className="manage">
       <p className="manage_top_title">토론관리</p>
       <div className="manage_top_division"></div>
      <div className="manage_wrap">
        {/* 왼쪽 본문 */}
        <div className="manage_left_wrap">
          <div className="manage_left_top">
            <div className="manage_book_tpye">
              <StyledSlider {...settings}>
                {bookData.map((item, index) => {
                  return (
                    <div className="manage_book_list_wrap" key={index}>
                      <h2 className="manage_book_title">책 제목 부분</h2>
                      <div className="manage_book_list">
                        <div className="manage_book_img"> 이미지 공간</div>
                      </div>
                    </div>
                  );
                })}
              </StyledSlider>
            </div>
          </div>
          <div className="manage_left_bottom">
            <div className="manage_left_bottom_wrap">
              <div className="manage_book_name_wrap">
                <h2 className="manage_book_name">토론 제목 부분</h2>
              </div>
              <div className="manage_book_name_content_wrap">
                <p className="manage_book_name_content">
                  sdfsdfasdfassdfsdfasdfassdfsdfasdfassdfsdfasdfassdfsdfasdfassdfsdfasdfas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 본문 */}
        <div className="manage_right_wrap">
          <div className="manage_right_admission">
            <h2 className="manage_admission_title">승인 리스트</h2>
            <div className="manage_admission_accept">
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <FixedSizeList
                  height={400}
                  width= {312}
                  itemSize={50} // 아이템의 높이
                  itemCount={acceptData.length} //아이템의 수
                  itemData={acceptData}
                  overscanCount={3}
                >
                  {ManageAcceptPost}
                </FixedSizeList>
              </Box>
            </div>
          </div>
          <div className="manage_right_application">
            <h2 className="manage_application_title">신청 리스트</h2>
            <div className="manage_application_accept">
            <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <FixedSizeList
                  height={400}
                  width= {312}
                  itemSize={50} // 아이템의 높이
                  itemCount={acceptData.length} //아이템의 수
                  itemData={acceptData}
                  overscanCount={3}
                >
                  {ManageApplicationPost}
                </FixedSizeList>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
