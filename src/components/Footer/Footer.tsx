import { FC } from "react";
import scss from "./Footer.module.scss";

import { BsArrowUpCircleFill } from "react-icons/bs";

import { contactObj } from "../ContactUs/content/contact.data";
import Logo from "../Logo/Logo";
import Icons from "../ContactUs/Icons";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer: FC = () => {
  return (
    <footer className={scss.footer}>
      <hr className={scss.hr} />
      <div className="container">
        <div className={scss.footer_grid}>
          <div className={scss.logo_container}>
            <Logo />

            <div className={scss.title_logo}>
              <div className={scss.title_icon}>
                <Icons
                  name={"GREENERGY-FOR-LIFE"}
                  classIcons={""}
                  width={60}
                  height={18}
                />
              </div>

              <div className={scss.arrow_up_mobile}>
                <a href="#hero" aria-label="arrow up">
                  <BsArrowUpCircleFill size={32} className={scss.arrow} />
                </a>
              </div>
            </div>
          </div>

          <div className={scss.icons}>
            <SocialMedia />
          </div>
          <div className={scss.arrow_up}>
            <button type="button">
              <a href="#hero" aria-label="arrow up">
                <BsArrowUpCircleFill size={32} className={scss.arrow} />
              </a>
            </button>
          </div>
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
