import { FC, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import scss from "./Header.module.scss";
import Modal from "../Modal/Modal";
import Icons from "../ContactUs/Icons";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 36);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={scss.header}
      id="main"
      style={{ backgroundColor: isScrolled ? "#ffffff" : "#F3F5FA" }}
    >
      <div className={`${scss.header_wrap} container`}>
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
        <nav className={scss.nav}>
          <button type="button" className={scss.burger_btn} onClick={onOpen}>
            <RxHamburgerMenu />
          </button>
          <a href="#contact" className={scss.learn_btn} aria-label="contact us">
            Get in touch
            <span className={scss.arrow_btn}>
              <BsFillArrowDownCircleFill size={16} />
            </span>
          </a>
        </nav>
        {isOpen && <Modal onClose={onClose} />}
      </div>
    </header>
  );
};

export default Header;
