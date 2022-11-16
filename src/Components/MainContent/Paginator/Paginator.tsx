import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Paginator.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { eventsInfoType } from '../../State/State';
import { Pagination, Navigation } from "swiper";
import { deflateSync } from "zlib";

type paginatorPropsType = {
  data: eventsInfoType[];
  currentPage:number
  // title: string
  // device: boolean
};

export const Paginator = (props: paginatorPropsType) => {

  // const [currentDates, setCurrentDates] =  useState<eventsInfoType>(props.data[0])
  // const [currentPage, setCurrentPage] = useState<number>(1)


  const currentPeriod = props.data[props.currentPage]

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{ type: "fraction" }}
        navigation={true}
        className="mySwiper"
      >
        {currentPeriod.events.map((element) => {
          return ( 
            <SwiperSlide key={element.id}>
              <div>
                <h3>{element.date}</h3>
                <p>{element.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
