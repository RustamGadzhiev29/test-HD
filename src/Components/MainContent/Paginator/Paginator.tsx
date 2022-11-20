import React, { useLayoutEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Paginator.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { eventsInfoType } from "../../State/State";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { deflateSync } from "zlib";
import gsap from "gsap";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type paginatorPropsType = {
  data: eventsInfoType[];
  currentPage: number;
  // title: string
  // device: boolean
};

export const Paginator = (props: paginatorPropsType) => {
  const currentPeriod = props.data[props.currentPage];

  const swiper = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        swiper.current,
        {
          rotation: 360,
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.33,
        }
      );
    }, currentPeriod);
    return () => ctx.revert();
  }, [currentPeriod]);

  return (
    <div className={styles.swiperContainer} ref={swiper}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}

        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
      >
        {currentPeriod.events.map((element) => {
          return (
            <SwiperSlide key={element.id}>
              <div>
                <h3 className={styles.yearText}>{element.date}</h3>
                <p className={styles.discription}>{element.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
