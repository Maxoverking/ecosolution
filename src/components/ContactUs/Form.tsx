import { FC, useState } from "react";
import scss from "./Form.module.scss";

import { PiArrowRight } from "react-icons/pi";

const Form: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const validateFullName = (value: string) => {
    if (!value.trim()) {
      return "Full name is required";
    }
    const onlyLettersRegex = /^[A-Za-z\s]+$/;
    if (!onlyLettersRegex.test(value)) {
      return "Wrong Fullname";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Wrong Email";
    }
    return "";
  };

  const validatePhone = (value: string) => {
    if (!value.trim()) {
      return "Phone is required";
    }
    const phoneRegex = /^\d{11}$/;

    if (!phoneRegex.test(value)) {
      return "Wrong Phone";
    }

    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleSubmit = () => {
    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setErrors({
      fullName: fullNameError,
      email: emailError,
      phone: phoneError,
    });

    if (!fullNameError && !emailError && !phoneError) {
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className={scss.form_container}>
      <form className={scss.form}>
        <div className={scss.wrap}>
          <label className={scss.label} htmlFor="fullName">
            * Full name:
          </label>
          <input
            className={`${
              errors.fullName !== "" ? scss.error_border : scss.input
            }`}
            type="text"
            id="fullName"
            placeholder="John Rosie"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
          />
          <div className={scss.input_error}>
            <span className={scss.error} role="alert">
              {errors.fullName}
            </span>
          </div>
        </div>
        <div className={scss.wrap}>
          <label className={scss.label} htmlFor="email">
            * E-mail:
          </label>
          <input
            className={`${
              errors.email !== "" ? scss.error_border : scss.input
            }`}
            type="text"
            id="email"
            placeholder="johnrosie@gmail.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <div className={scss.input_error}>
            <span className={scss.error} role="alert">
              {errors.email}
            </span>
          </div>
        </div>
        <div className={scss.wrap}>
          <label className={scss.label} htmlFor="phone">
            * Phone:
          </label>
          <input
            className={`${
              errors.phone !== "" ? scss.error_border : scss.input
            }`}
            type="text"
            id="phone"
            placeholder="380961234567"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          <div className={scss.input_error}>
            <span className={scss.error} role="alert">
              {errors.phone}
            </span>
          </div>
        </div>
        <label className={scss.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={scss.textarea}
          id="message"
          name="message"
          cols={20}
          rows={10}
          placeholder="My message...."
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
        ></textarea>
        <div className={scss.btn_container}>
          <div className={scss.learn_btn_container}>
            <button
              className={scss.learn_btn}
              type="button"
              onClick={handleSubmit}
            >
              Send
              <span className={scss.arrow_btn}>
                <PiArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
