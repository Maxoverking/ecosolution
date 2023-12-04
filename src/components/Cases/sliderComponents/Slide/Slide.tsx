import { FC } from "react";
import scss from "./Slide.module.scss";
import ImgComponent from "./ImgComponent";
import ArrowIcon from "../../../../icons/arrow.svg?react";
interface SlideProps {
  img: string;
  title: string;
  desc: string;
  date: string;
  onClick: () => void;
}

const Slide: FC<SlideProps> = ({ img, title, desc, date, onClick }) => {
  return (
    <div className={scss.slide}>
      <ImgComponent img={img} alt={title} />
      <div className={scss.wrapper}>
        <div className={scss.label_wrapper}>
          <p className={scss.label}>{title}</p>
          <button
            title="details..."
            aria-label=" details"
            className={scss.btn_more}
            onClick={onClick}
          >
            <ArrowIcon className={scss.btn_icon} aria-label="arrow" />
          </button>
        </div>

        <p className={scss.meta}>
          <span>{desc}</span>
          <span className={scss.date}>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default Slide;
