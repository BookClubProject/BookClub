import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules

import SwiperCore, { Pagination, Autoplay, Navigation }  from "swiper/core";

// Import Swiper styles
import 'swiper/components/autoplay'
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

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    
    return (
      <div>
        <div class = "book-list-title">베스트셀러</div>

        <Swiper style = {styles.wrapper}
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={6}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay = {{
            delay : 2000
          }}
          navigation
          className="mySwiper"
        >
          <SwiperSlide><img src = "data:image/jpeg;base64,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" /></SwiperSlide>
          <SwiperSlide><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S-5Z0zwKCY6jKolW5naQojapyk68yHFGHw&usqp=CAU"/></SwiperSlide>
          <SwiperSlide><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S-5Z0zwKCY6jKolW5naQojapyk68yHFGHw&usqp=CAU"/></SwiperSlide>
          <SwiperSlide><img src = "data:image/jpeg;base64,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" /></SwiperSlide>
          <SwiperSlide><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S-5Z0zwKCY6jKolW5naQojapyk68yHFGHw&usqp=CAU"/></SwiperSlide>
          <SwiperSlide><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3S-5Z0zwKCY6jKolW5naQojapyk68yHFGHw&usqp=CAU"/></SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </div>
    );
  }


export default Book;