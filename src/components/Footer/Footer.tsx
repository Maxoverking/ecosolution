import { FC } from "react";
import scss from "./Footer.module.scss";
import FB from "../../icons/facebook.svg?react";
import INSTAGRAM from "../../icons/instagram.svg?react";

import { contactObj } from "../content/contact.data";
import Logo from "../Logo/Logo";
import Icons from "../ContactUs/Icons";

const Footer: FC = () => {
  return (
    <footer className={scss.footer}>
      <hr className={scss.hr} />
      <div>
        <div className={scss.logo_container}>
          <Logo />
          <div className={scss.title_logo}>
            <Icons
              name={"GREENERGY-FOR-LIFE"}
              classIcons={""}
              width={60}
              height={18}
            />
          </div>
        </div>

        <div className={scss.icons}>
          <a href="#" className={scss.icon_social}>
            <FB className={scss.fb} aria-label="facebook" />
          </a>
          <a href="#" className={scss.icon_social}>
            <INSTAGRAM className={scss.instagram} />
          </a>
        </div>

        <div className={scss.address}>
          <a
            className={scss.contact}
            href={`http://maps.google.com/?q=:${contactObj.address}`}
            target="_blank"
            rel="noreferrer"
          >
            <address className={scss.address_title}>
              {contactObj.address}
            </address>
          </a>

          <a className={scss.mail} href={`mailto:${contactObj.email}`}>
            {contactObj.email}
          </a>
          <span className={scss.eco_title}>{contactObj.eco}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
