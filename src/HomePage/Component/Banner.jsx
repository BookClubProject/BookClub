import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React from "react";

const styles = {
  wrapper: {
    height: "35rem",
    width: "100%",
  },
  container: {
   // marginLeft: "7%",
   // marginRight: "7%",
  },
};

const data = [
  // {
  //   // 사이트에 있는 이미지 가져오는 소스
  //  image: 'https://file.miricanvas.com/template_thumb/2021/09/10/16/40/k2hgdbi1hntoeo8f/thumb.jpg',
  //  caption:"Caption",
  //  description:"첫 번째 화면"
  // },
  {
    // 내 컴퓨터 혹은 폴더 안에있는 이미지 가져오는 소스
    image: require("../../ImageSource/BannerImage/banner1.png"),
    caption: "Caption",
    description: "첫 번째 화면",
  },
  {
    // 내 컴퓨터 혹은 폴더 안에있는 이미지 가져오는 소스
    image: require("../../ImageSource/BannerImage/banner2.png"),
    caption: "Caption",
    description: "두 번째 화면",
  },
  {
    image: require("../../ImageSource/BannerImage/banner3.png"),
    caption: "Caption",
    description: "세 번쨰 화면",
  },
];

function Homecarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Carousel fade 없애면 효과 다름
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      carousel="true"
      slide
      cols={2}
      rows={1}
      gap={10}
      style={styles.container}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item style={styles.wrapper} key={i}>
            <img className="d-block" src={slide.image} alt="slider image" style = {{width : "100%" , height : "100%" , padding : "0px"}} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default Homecarousel;
