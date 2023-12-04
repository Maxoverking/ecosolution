import { Children, useState, useRef, useEffect, useMemo } from "react";
import Slider from "react-slick";
import Slide from "../Slide/Slide";
import ArrowIcon from "../../../../icons/arrow.svg?react";
import "./slick.scss";
import "./slick-theme.scss";
import scss from "./SliderContainer.module.scss";
import sliderData from "../../sliderData";

const SliderContainer = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const children = Children.count(sliderRef.current.props.children);
      setTotalSlides(children);
    }
  }, []);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const formattedNumber = (num: number) => String(num).padStart(2, "0");
  const memoizedSLides = useMemo(() => {
    return [...sliderData.slides];
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    afterChange: (current: number) => setCurrentCard(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <>
      <div className={scss.title_wrapper}>
        <h2 className={scss.title}>{sliderData.title}</h2>
        <div className={scss.actions_wrapper}>
          <p>
            <span className={scss.prev_slide}>
              {formattedNumber(currentCard + 1)}
            </span>{" "}
            <span className={scss.next_slide}>
              / {formattedNumber(totalSlides)}
            </span>
          </p>
          <ul className={scss.action_btn}>
            <li>
              <button
                type="button"
                className={scss.btn_prev}
                onClick={previous}
              >
                <ArrowIcon
                  className={scss.btn_icon}
                  aria-label="previous button"
                />
              </button>
            </li>
            <li>
              <button type="button" className={scss.btn_next} onClick={next}>
                <ArrowIcon className={scss.btn_icon} aria-label="button" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {memoizedSLides.length > 0 &&
          memoizedSLides.map(({ img, title, desc, date }) => (
            <Slide
              key={title}
              img={img}
              title={title}
              desc={desc}
              date={date}
              onClick={next}
            />
          ))}
      </Slider>
    </>
  );
};

export default SliderContainer;
