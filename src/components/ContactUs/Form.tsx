import { FC } from "react";
import { BUTTON, DIV_FORM, FORM, INPUT, LABEL, TEXTAREA } from "./Form.styled";

const Form: FC = () => {
  return (
    <DIV_FORM>
      <FORM>
        <LABEL htmlFor="fullName">* Full name:</LABEL>
        <INPUT type="text" id="fullName" placeholder="John Rosie" />

        <LABEL htmlFor="email">* E-mail:</LABEL>
        <INPUT type="text" id="email" placeholder="johnrosie@gmail.com" />

        <LABEL htmlFor="phone">* Phone:</LABEL>
        <INPUT type="text" id="phone" placeholder="380961234567" />

        <LABEL htmlFor="message">Message:</LABEL>
        <TEXTAREA
          id="message"
          name="message"
          cols={20}
          rows={10}
          placeholder="My message...."
        ></TEXTAREA>
        <BUTTON type="submit">Send</BUTTON>
      </FORM>
    </DIV_FORM>
  );
};

export default Form;
