import { FC } from "react";
import scss from "./ContactUs.module.scss";
import PHONE from "../../icons/phone.svg?react";
import EMAIL from "../../icons/email.svg?react";
import MAP from "../../icons/map.svg?react";

import Form from "./Form";
import { contactObj } from "../content/contact.data";
import SocialMedia from "../SocialMedia/SocialMedia";

const ContactUs: FC = () => {
  return (
    <section className={scss.contact_section} id="contact">
      <h2 className={scss.title}>Contact us</h2>
      <div className={scss.contact_container}>
        <div>
          <ul>
            <li className={scss.desc}>
              <p className={scss.desc}>Phone:</p>
              <div className={scss.container_phone}>
                <span className={scss.phone}>
                  <PHONE className={scss.icon} />
                  <a
                    className={scss.link_contact}
                    href={`tel:${contactObj.phone[0]}`}
                    aria-label="phone"
                  >
                    38 (098) 12 34 567
                  </a>
                </span>
                <span className={scss.phone}>
                  <PHONE className={scss.icon} />
                  <a
                    className={scss.link_contact}
                    href={`tel:${contactObj.phone[1]}`}
                    aria-label="phone"
                  >
                    38 (098) 12 34 567
                  </a>
                </span>
              </div>
            </li>
            <li className={scss.desc}>
              <p className={scss.desc}>Email:</p>
              <span className={scss.phone}>
                <EMAIL className={scss.icon} />
                <a
                  className={scss.link_contact}
                  href={`mailto:${contactObj.email}`}
                  aria-label="email"
                >
                  {contactObj.email}
                </a>
              </span>
            </li>
            <li className={scss.desc}>
              <p className={scss.desc}>Address:</p>
              <span className={scss.phone}>
                <a
                  className={scss.contact}
                  href={`http://maps.google.com/?q=:${contactObj.address}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="address"
                >
                  <MAP className={scss.icon} />

                  <address className={scss.address}>
                    {contactObj.address}
                  </address>
                </a>
              </span>
            </li>
            <li className={scss.desc}>
              <p className={scss.desc}>Social Networks:</p>
              <div className={scss.social_link}>
                <SocialMedia />
              </div>
            </li>
          </ul>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
