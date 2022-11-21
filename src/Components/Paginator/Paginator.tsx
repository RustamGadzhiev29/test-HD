/* eslint-disable comma-dangle */
/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Paginator.module.scss";
import { eventsInfoType } from "../../State/State";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

type PaginatorPropsType = {
  data: eventsInfoType[];
  currentPage: number;
};

export const Paginator = ({ data, currentPage }: PaginatorPropsType) => {
  const currentPeriod = data[currentPage];

  const swiperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        swiperRef.current,
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
    <div className={styles.swiperContainer} ref={swiperRef}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={30}
        navigation
        id="always-be-swipin"
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
