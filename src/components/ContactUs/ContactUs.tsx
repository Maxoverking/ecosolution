import { FC } from "react";
import {
  A,
  ADDRESS,
  CONTACT_Container,
  H2,
  LI,
  SOCIAL_LINK,
  SPAN_PHONE,
  SPAN_TITLE,
} from "./ContactUs.styles";
import Icons from "./Icons";
import Form from "./Form";

const ContactUs: FC = () => {
  return (
    <CONTACT_Container>
      <H2>Contact us</H2>
      <div>
        <div>
          <ul>
            <LI>
              <SPAN_TITLE>Phone:</SPAN_TITLE>
              <SPAN_PHONE>
                <Icons name={"call"} classIcons={""} width={24} height={24} />
                <A href="tel:+380981234567">38 (098) 12 34 567</A>
              </SPAN_PHONE>
              <SPAN_PHONE>
                <Icons name={"call"} classIcons={""} width={24} height={24} />
                <A href="tel:+380981234567">38 (098) 12 34 567</A>
              </SPAN_PHONE>
            </LI>
            <LI>
              <SPAN_TITLE>Email:</SPAN_TITLE>
              <SPAN_PHONE>
                <Icons name={"sms"} classIcons={""} width={24} height={24} />
                <A href="mailto:office@ecosolution.com">
                  office@ecosolution.com
                </A>
              </SPAN_PHONE>
            </LI>
            <LI>
              <SPAN_TITLE>Address:</SPAN_TITLE>
              <SPAN_PHONE>
                <Icons name={"map"} classIcons={""} width={40} height={24} />

                <ADDRESS>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </ADDRESS>
              </SPAN_PHONE>
            </LI>
            <LI>
              <SPAN_TITLE>Social Networks:</SPAN_TITLE>
              <SOCIAL_LINK>
                <A href="#">
                  <Icons
                    name={"facebook"}
                    classIcons={""}
                    width={24}
                    height={24}
                  />
                </A>
                <A href="#">
                  <Icons
                    name={"instagram"}
                    classIcons={""}
                    width={24}
                    height={24}
                  />
                </A>
              </SOCIAL_LINK>
            </LI>
          </ul>
        </div>
        <Form />
      </div>
    </CONTACT_Container>
  );
};

export default ContactUs;
