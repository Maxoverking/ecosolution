import { FC, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import FB from "../../icons/facebook.svg?react";
import INSTAGRAM from "../../icons/instagram.svg?react";
import scss from "./Menu.module.scss";
interface IModal {
  onClose: (newValue: boolean) => void;
}

const Menu: FC<IModal> = ({ onClose }) => {
  const [anchor, setAnchor] = useState("");

  console.log("🚀  anchor:", anchor);
  useEffect(() => {
    const hash = window.location.hash;
    setAnchor(hash.substring(1, hash.length));
  }, []);
  return (
    <>
      <div className={scss.menu_container}>
        <ul>
          <li
            className={` ${scss.menu_title} ${
              anchor === "main" || anchor === "" ? scss.active : ""
            } `}
          >
            <a href="#main" onClick={() => onClose(false)}>
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
            <a href="#about" onClick={() => onClose(false)}>
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
            <a href="#cases" onClick={() => onClose(false)}>
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
            <a href="#faq" onClick={() => onClose(false)}>
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
            <a href="#contact" onClick={() => onClose(false)}>
              Contact{" "}
              <span>
                <GoArrowUpRight size={16} />
              </span>
            </a>
          </li>
        </ul>
        <div className={scss.icons}>
          <a
            href="#"
            className={scss.icon_social}
            onClick={() => onClose(false)}
          >
            <FB className={scss.fb} aria-label="facebook" />
          </a>
          <a
            href="#"
            className={scss.icon_social}
            onClick={() => onClose(false)}
          >
            <INSTAGRAM className={scss.instagram} aria-label="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
