import { FC } from "react";
import tabletValues1xJ from "../../images/values-1-tablet@1x.jpg";
import tabletValues1xW from "../../images/values-1-tablet@1x.webp";
import tabletValues2xJ from "../../images/values-1-tablet@2x.jpg";
import tabletValues2xW from "../../images/values-1-tablet@2x.webp";
import desktopValues1xJ from "../../images/values-1-desktop@1x.jpg";
import desktopValues1xW from "../../images/values-1-desktop@1x.webp";
import desktopValues2xJ from "../../images/values-1-desktop@2x.jpg";
import desktopValues2xW from "../../images/values-1-desktop@2x.webp";

const ImgMainValue1: FC = () => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1240px)"
          srcSet={`${desktopValues1xW} 1x,${desktopValues2xW} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1240px)"
          srcSet={`${desktopValues1xJ} 1x ,${desktopValues2xJ} 2x`}
          type="image/jpeg"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tabletValues1xW} 1x ,${tabletValues2xW} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tabletValues1xJ} 1x ,${tabletValues2xJ} 2x`}
          type="image/jpeg"
        />
        <img
          // style={{ width: "342px", height: "197px" }}
          src={`${tabletValues1xJ}`}
          alt="Turbine"
          loading="lazy"
          sizes="(max-width: 767px) 320px, (min-width: 768px) 768px, (min-width: 1280px) 1280px"
        />
      </picture>
    </div>
  );
};

export default ImgMainValue1;
