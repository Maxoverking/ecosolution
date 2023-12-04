import { FC } from "react";
import Icons from "../ContactUs/Icons";
import scss from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={scss.logo_container}>
      <a className={scss.logo} href="#main">
        <Icons name={"logo"} classIcons={""} width={31} height={18} />
      </a>
      <a href="#main">
        <Icons name={"eco"} classIcons={"logo"} width={170} height={40} />
      </a>
    </div>
  );
};

export default Logo;
