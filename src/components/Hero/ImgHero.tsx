import { FC } from "react";
// import mobileHero1xJ from "../../images/hero-mobile@1x.jpg";
// import mobileHero2xJ from "../../images/hero-mobile@2x.jpg";
// import mobileHero1xW from "../../images/hero-mobile@1x.webp";
// import mobileHero2xW from "../../images/hero-mobile@2x.webp";
import tabletHero1xJ from "../../images/hero-tablet@1x.jpg";
import tabletHero2xJ from "../../images/hero-tablet@2x.jpg";
import tabletHero1xW from "../../images/hero-tablet@1x.webp";
import tabletHero2xW from "../../images/hero-tablet@2x.webp";
import desktopHero1xJ from "../../images/hero-desktop@1x.jpg";
import desktopHero2xJ from "../../images/hero-desktop@2x.jpg";
import desktopHero1xW from "../../images/hero-desktop@1x.jpg";
import desktopHero2xW from "../../images/hero-desktop@2x.jpg";

const ImgHero: FC = () => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet={`${desktopHero1xW} 1x,${desktopHero2xW} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1200px)"
          srcSet={`${desktopHero1xJ} 1x ,${desktopHero2xJ} 2x`}
          type="image/jpeg"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tabletHero1xW} 1x ,${tabletHero2xW} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tabletHero1xJ} 1x ,${tabletHero2xJ} 2x`}
          type="image/jpeg"
        />

        {/* <source
          media="(min-width: 320px)"
          srcSet={`${mobileHero1xW} 1x ,${mobileHero2xW} 2x `}
          type="image/webp"
        />
        <source
          media="(min-width: 320px)"
          srcSet={`${mobileHero1xJ} 1x , ${mobileHero2xJ} 2x`}
          type="image/jpeg"
        /> */}

        <img
          src={`${tabletHero1xJ}`}
          alt="Turbine"
          loading="lazy"
          sizes="(max-width: 767px) 320px, (min-width: 768px) 768px, (min-width: 1280px) 1280px"
        />
      </picture>
    </div>
  );
};

export default ImgHero;
