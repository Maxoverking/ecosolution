import { FC } from "react";
import Icons from "../ContactUs/Icons";
import scss from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <a href="#">
      <div className={scss.logo_container}>
        <div className={scss.logo}>
          <Icons name={"logo"} classIcons={""} width={31} height={18} />
        </div>

        <span>
          <Icons name={"eco"} classIcons={"logo"} width={170} height={40} />
        </span>
      </div>
    </a>
  );
};

export default Logo;
