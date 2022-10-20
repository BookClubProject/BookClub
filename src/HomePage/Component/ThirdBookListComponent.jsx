import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import SwiperCore, { Pagination, Autoplay, Navigation }  from "swiper/core";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import "../homePage.css";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const styles = {
  wrapper : {
  marginLeft : "100px",
  marginRight : "100px"
  }
}

const Book = () => {
  return (
    <div>
      <div class = "book-list-title">역사책</div>
      <Swiper style = {styles.wrapper}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={6}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay = {{
          delay : 4000
        }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
  );
}

export default Book;