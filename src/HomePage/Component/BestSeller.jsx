import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";
import "swiper/components/autoplay";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";
import "../HomePage.css";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Book = () => {
  const key =
    "0814AB975D0EEB225BC890247147C2A91BAEBE28834D6041916A4D5A0A661133";
  const [bestBooks, setbestBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBestSellers = async () => {
    const json = await (
      await fetch(
        "/api/bestSeller.api?key=" + key + "&categoryId=100&output=json"
      )
    ).json();
    console.log(json);
    setbestBooks(json.item);
    setLoading(false);
  };
  useEffect(() => {
    getBestSellers();
  }, []);

  //console.log(bestBooks);
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div className="bestseller_wrap">
      <div className="bestseller_contents">
        <p className="book-list-title">최근 베스트셀러</p>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={6}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          navigation
          className="mySwiper"
        >
          {loading ? <SwiperSlide>loading</SwiperSlide> :( <div>
            {bestBooks.map((bestbook) => (
              <div key={bestbook.isbn}>
                <SwiperSlide key ={bestbook.isbn}> <img src={bestbook.coverSmallUrl}></img></SwiperSlide>
              </div>
            ))}
          </div>) }

        </Swiper>
      </div>
    </div>
  );
};

export default Book;
