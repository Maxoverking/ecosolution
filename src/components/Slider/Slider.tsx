/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";

import { sliderData } from "./sliderData";
import styled from "styled-components";
import {
  DIV,
  DIV_BTN,
  DIV_NAV_BUTTON,
  DIV_SLIDER_NAV,
  DIV_TITLE,
  H2,
  HR,
  ICON_ARROW,
  ICON_ARROW_NAV_LEFT,
  ICON_ARROW_NAV_RIGHT,
  LI,
  NAV_BUTTON_L,
  NAV_BUTTON_R,
  P,
  P_TITLE,
  SPAN,
  SPAN_ARROW,
  SPAN_CURRENT,
  SPAN_TOTAL_IMG,
  Section,
  SlideContent,
  UL,
} from "./Slider.styled";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const totalSlides = sliderData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const startAutoPlay = () => {
    setAutoPlay(true);
  };

  const stopAutoPlay = () => {
    setAutoPlay(false);
  };

  useEffect(() => {
    let intervalId: number;

    const handleAutoPlay = () => {
      if (autoPlay) {
        intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 4000);
      } else {
        clearInterval(intervalId);
      }
    };

    handleAutoPlay();

    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay, currentIndex, totalSlides]);

  return (
    <Section>
      <H2>Successful cases of our company</H2>
      <DIV_SLIDER_NAV>
        <div>
          <SPAN_CURRENT>
            {currentIndex < 9 ? `0${currentIndex + 1}` : `${currentIndex}`}{" "}
          </SPAN_CURRENT>
          <SPAN_TOTAL_IMG>
            {" "}
            / {totalSlides < 9 ? `0${totalSlides}` : `${totalSlides}`}
          </SPAN_TOTAL_IMG>
        </div>
        <DIV_NAV_BUTTON>
          <NAV_BUTTON_L type="button" onClick={prevSlide}>
            <ICON_ARROW_NAV_LEFT />
          </NAV_BUTTON_L>
          <NAV_BUTTON_R type="button" onClick={nextSlide}>
            <ICON_ARROW_NAV_RIGHT />
          </NAV_BUTTON_R>
        </DIV_NAV_BUTTON>
      </DIV_SLIDER_NAV>
      <UL
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {[sliderData[totalSlides - 1], ...sliderData, sliderData[0]].map(
          ({ id, title, description, date, img1X }) => (
            <LI key={id}>
              <Image src={img1X} alt="foto" />
              <SlideContent>
                <DIV_TITLE>
                  <DIV_BTN>
                    <DIV>
                      <P>{title}</P>
                    </DIV>

                    <SPAN_ARROW>
                      <ICON_ARROW />
                    </SPAN_ARROW>
                  </DIV_BTN>
                  <HR />

                  <P_TITLE>
                    {description} <SPAN>{date}</SPAN>
                  </P_TITLE>
                </DIV_TITLE>
              </SlideContent>
            </LI>
          )
        )}
      </UL>
    </Section>
  );
};

export default Slider;
