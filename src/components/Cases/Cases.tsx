import { useState } from "react";
import ArrowIcon from "../../icons/arrow.svg?react";
import scss from "./Cases.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { useMediaQuery } from "react-responsive";
import sliderData from "./sliderData";
import ImgComponent from "./ImageComponents/Slide/ImgComponent";

const Cases = () => {
  const [count, setCount] = useState(1);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  let slidesPerView = 2;

  if (isMobile) {
    slidesPerView = 1;
  } else {
    slidesPerView = 2;
  }

  return (
    <section id="cases">
      <div className={scss.wrapper}>
        <h2 className={scss.title}>Successful cases of our company</h2>

        <div className={scss.slider_navigation}>
          <p className={scss.navigation_count}>
            <span style={{ color: "#173D33" }}>0{count}</span> /05
          </p>
          <div className={scss.wraper_btn}>
            <button
              className={`${scss.nav_slider_btn} custom_prev`}
              type="button"
              aria-label="Previous slide"
            >
              <ArrowIcon aria-label="previous button" />
            </button>
            <button
              className={`${scss.nav_slider_btn} custom_next`}
              type="button"
              aria-label="Next slide"
            >
              <ArrowIcon className={scss.btn_icon} aria-label="next button" />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop={true}
        onSlideChange={(swiper) => setCount(swiper.realIndex + 1)}
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
        }}
        modules={[Navigation]}
      >
        {sliderData.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <ul className={scss.list}>
              <li>
                <div className={scss.list_item}>
                  <ImgComponent img={slide.img} alt={slide.title} />
                  <div className={scss.list_item_description}>
                    <div className={scss.item_description}>
                      <p>{slide.desc}</p>
                      <button aria-label="See more">
                        <ArrowIcon
                          className={scss.btn_icon_desc}
                          aria-label="next button"
                        />
                      </button>
                    </div>
                    <div className={scss.item_description_info}>
                      <p>{slide.title}</p>
                      <p>{slide.date}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Cases;
