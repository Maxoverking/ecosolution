import { FC, useEffect, useState } from "react";
import scss from "./ImgComponent.module.scss";
interface Images {
  [x: string]: string;
}
interface ResponsiveImgProps {
  img: string;
  alt?: string;
  className?: string;
}

const ImgComponent: FC<ResponsiveImgProps> = ({ img, alt, className }) => {
  const [images, setImages] = useState<Images | null>(null);

  useEffect(() => {
    async function loadMobileIms() {
      try {
        const mobileImg = await import(
          `../../../../images/${img}-mobile@1x.jpg`
        );
        const mobileImg2x = await import(
          `../../../../images/${img}-mobile@2x.jpg`
        );
        const mobileImgWeb = await import(
          `../../../../images/${img}-mobile@1x.webp`
        );
        const mobileImgWeb2x = await import(
          `../../../../images/${img}-mobile@2x.webp`
        );

        setImages((prev) => {
          return {
            ...prev,
            mobileImg: mobileImg?.default,
            mobileImg2x: mobileImg2x?.default,
            mobileImgWeb: mobileImgWeb?.default,
            mobileImgWeb2x: mobileImgWeb2x?.default,
          };
        });
      } catch (error) {
        // console.log(`Mobile img not exist ${name}`);
      }
    }
    async function loadTabImgs() {
      try {
        const tabletImg = await import(
          `../../../../images/${img}-tablet@1x.jpg`
        );
        const tabletImg2x = await import(
          `../../../../images/${img}-tablet@2x.jpg`
        );
        const tabletImgWeb = await import(
          `../../../../images/${img}-tablet@1x.webp`
        );
        const tabletImgWeb2x = await import(
          `../../../../images/${img}-tablet@2x.webp`
        );
        setImages((prev) => {
          return {
            ...prev,
            tabletImg: tabletImg?.default,
            tabletImg2x: tabletImg2x?.default,
            tabletImgWeb: tabletImgWeb?.default,
            tabletImgWeb2x: tabletImgWeb2x?.default,
          };
        });
      } catch (error) {
        // console.log(`Tablet img not exist ${name}`);
      }
    }
    async function loadDesktopImgs() {
      try {
        const desktopImg = await import(
          `../../../../images/${img}-desktop@1x.jpg`
        );
        const desktopImg2x = await import(
          `../../../../images/${img}-desktop@2x.jpg`
        );
        const desktopImgWeb = await import(
          `../../../../images/${img}-desktop@1x.webp`
        );
        const desktopImgWeb2x = await import(
          `../../../../images/${img}-desktop@2x.webp`
        );
        setImages((prev) => {
          return {
            ...prev,
            desktopImg: desktopImg?.default,
            desktopImg2x: desktopImg2x?.default,
            desktopImgWeb: desktopImgWeb?.default,
            desktopImgWeb2x: desktopImgWeb2x?.default,
          };
        });
      } catch (error) {
        // console.log(`Desktop img not exist ${name}`);
      }
    }
    loadTabImgs();
    loadMobileIms();
    loadDesktopImgs();
  }, [img]);

  return (
    <>
      {images && (
        <picture>
          {images.mobileImg && (
            <>
              <source
                srcSet={`${images.tabletImgWeb} 1x, ${images.tabletImgWeb2x} 2x`}
                type="image/webp"
                media="(max-width:360px)"
              />
              <source
                srcSet={`${images.tabletImgWeb} 1x, ${images.tabletImgWeb2x} 2x`}
                type="image/jpeg"
                media="(max-width:360px)"
              />
            </>
          )}

          <source
            srcSet={`${images.tabletImgWeb} 1x, ${images.tabletImgWeb2x} 2x`}
            type="image/webp"
            media="(max-width:768px)"
          />
          <source
            srcSet={`${images.tabletImg} 1x, ${images.tabletImg2x} 2x`}
            type="image/jpeg"
            media="(max-width:768px)"
          />

          <source
            srcSet={`${images.desktopImgWeb} 1x, ${images.desktopImgWeb2x} 2x`}
            type="image/webp"
            media="(max-width:1240px)"
          />
          <source
            srcSet={`${images.desktopImg} 1x, ${images.desktopImg2x} 2x`}
            type="image/jpeg"
            media="(max-width:1240px)"
          />
          <img
            srcSet={` ${images.desktopImg} 1240w`}
            alt={alt || "Wind turbine clean energy"}
            loading="lazy"
            sizes="(max-width: 767px) 360px, (min-width: 768px) 768px, (min-width: 1240px) 1240px"
            className={`${scss.image} ${className || ""}`}
          />
        </picture>
      )}
    </>
  );
};

export default ImgComponent;
