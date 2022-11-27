import React from "react";
import "../../CompoCSS/Review.css";
import { BsChatTextFill } from "react-icons/bs";
import Slider from "react-slick";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { Button } from "@material-ui/core";

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
    color: #005100;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-prev {
    left: -70px;
  }
  .slick-next {
    right: -45px;
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
    color: #007f00;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #005100;
  }
`;
const styles = {
  change_btn: {
    background: "#007f00",
    fontWeight: "500",
    color: "white",
    width: "100px",
    margin: "10px",
    fontSize: "1.2rem",
  },
};
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

function Review() {
  return (
    <div className="review_wrap">
      <div className="review_content_wrap">
        <div className="review_content_title">
          <p className="title">후기작성</p>
          <BsChatTextFill className="introduction_react_icon" size={25} />
        </div>
        <div className="review_book_type_wrap">
          <div className="review_book_type">
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
        <div className="review_book_review_input">
          <Form.Group
            className="review_book_textarea"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="review_book_review_input_title">
              토론에 대한 평가를 20자 이상 작성해 주세요.
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
        <div className="review_book_btn1">
          <Button style={styles.change_btn}>등록</Button>
        </div>
      </div>
    </div>
  );
}

export default Review;
