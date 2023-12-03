import { FC, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import scss from "./Menu.module.scss";

const Menu: FC = () => {
  const [anchor, setAnchor] = useState("");

  console.log("🚀  anchor:", anchor);
  useEffect(() => {
    const hash = window.location.hash;
    setAnchor(hash.substring(1, hash.length));
  }, []);
  return (
    <>
      <ul>
        <li
          className={` ${scss.menu_title} ${
            anchor === "main" || anchor === "" ? scss.active : ""
          } `}
        >
          <a href="#main">
            Main{" "}
            <span>
              <GoArrowUpRight size={16} />
            </span>
          </a>
        </li>
        <li
          className={` ${scss.menu_title} ${
            anchor === "about" ? scss.active : ""
          } `}
        >
          <a href="#about">
            About{" "}
            <span>
              <GoArrowUpRight size={16} />
            </span>
          </a>
        </li>
        <li
          className={` ${scss.menu_title} ${
            anchor === "cases" ? scss.active : ""
          } `}
        >
          <a href="#cases">
            Cases{" "}
            <span>
              <GoArrowUpRight size={16} />
            </span>
          </a>
        </li>
        <li
          className={` ${scss.menu_title} ${
            anchor === "faq" ? scss.active : ""
          } `}
        >
          <a href="#faq">
            FAQ{" "}
            <span>
              <GoArrowUpRight size={16} />
            </span>
          </a>
        </li>
        <li
          className={` ${scss.menu_title} ${
            anchor === "contact" ? scss.active : ""
          } `}
        >
          <a href="#contact">
            Contact{" "}
            <span>
              <GoArrowUpRight size={16} />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
