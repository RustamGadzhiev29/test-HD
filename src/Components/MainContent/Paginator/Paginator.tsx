import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Paginator.module.scss"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export const Paginator = () => {
  return (
    <div className={styles.swiperContainer}>
    <Swiper

slidesPerView={3.5}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{"type": "fraction"}}
                navigation={true}
                className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  </div>
);
};
