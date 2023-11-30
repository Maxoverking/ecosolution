import { FC } from "react";
import {
  ADDRESS_F,
  DIV,
  DIV_ECO,
  ECOSOLUTION,
  FOOTER,
  HR,
  MAIL,
} from "./Footer.styled";
import { A } from "../ContactUs/ContactUs.styles";
import Icons from "../ContactUs/Icons";

const Footer: FC = () => {
  return (
    <FOOTER>
      <HR />
      <div>
        <DIV_ECO>
          <div>
            <Icons name={"logo"} classIcons={""} width={31} height={18} />
          </div>
          <A href="#">
            <Icons name={"facebook"} classIcons={""} width={24} height={24} />
          </A>
          <A href="#">
            <Icons name={"instagram"} classIcons={""} width={24} height={24} />
          </A>
        </DIV_ECO>

        <DIV>
          <ADDRESS_F>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</ADDRESS_F>
          <MAIL href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </MAIL>
          <ECOSOLUTION>ecosolution &copy; 2023</ECOSOLUTION>
        </DIV>
      </div>
    </FOOTER>
  );
};

export default Footer;
