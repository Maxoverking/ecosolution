import { FC } from "react";
import scss from "./SocialMedia.module.scss";
import FB from "../../icons/facebook.svg?react";
import INSTAGRAM from "../../icons/instagram.svg?react";

const SocialMedia: FC = () => {
  return (
    <>
      <a href="#" className={scss.icon_social}>
        <FB className={scss.fb} aria-label="facebook" />
      </a>
      <a href="#" className={scss.icon_social}>
        <INSTAGRAM className={scss.instagram} />
      </a>
    </>
  );
};

export default SocialMedia;
