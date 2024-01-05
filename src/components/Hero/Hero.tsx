import { FC } from "react";
import { PiArrowRight } from "react-icons/pi";
import scss from "./Hero.module.scss";
import { contactObj } from "../ContactUs/content/contact.data";
import ImgHero from "./ImgHero";

const Hero: FC = () => {
  return (
    <section className={scss.hero}>
      <div className={scss.hero_title}>
        <div>
          <h1 className={scss.hero_main_title}>
            RENEWABLE ENERGY FOR ANY TASK
          </h1>
        </div>

        <div className={scss.hero_title_container}>
          <p className={scss.title}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <div className={scss.learn_btn_container}>
            <a href="#cases" className={scss.learn_btn}>
              Learn more
              <span className={scss.arrow_btn}>
                <PiArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
      <hr className={scss.green_line} />
      <ul className={scss.contact_list}>
        <li className={scss.contact_list_address}>
          <a
            className={scss.contact}
            href={`http://maps.google.com/?q=:${contactObj.address}`}
            target="_blank"
            rel="noreferrer"
          >
            {contactObj.address}
          </a>
        </li>
        <li className={scss.contact_list_mail}>
          <a className={scss.contact} href={`mailto:${contactObj.email}`}>
            {" "}
            {contactObj.email}
          </a>
        </li>
        <li>
          <span className={scss.eco_desktop}>{contactObj.eco}</span>
        </li>
      </ul>
      <div className={scss.hero_img}>
        <ImgHero />
      </div>
    </section>
  );
};

export default Hero;
