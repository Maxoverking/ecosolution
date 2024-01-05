import { FC } from "react";
import scss from "./MainValue.module.scss";
import Icons from "../ContactUs/Icons";
import ImgMainValue1 from "./ImgMainValue1";
import ImgMainValue2 from "./ImgMainValue2";
import { mainValueObj } from "./mainValueObj";

const MainValue: FC = () => {
  return (
    <section id="about">
      <div className={scss.main}>
        <h2 className={scss.main_title}>Main values of our company</h2>
        <div className={scss.main_desc_container}>
          <hr className={scss.green_line} />
          <p className={scss.main_desc}>{mainValueObj.title}</p>
        </div>
      </div>
      <div className={scss.value_container}>
        <ul className={scss.list}>
          <li className={scss.list1}>
            <div className={scss.card}>
              <h4 className={scss.title}>
                {" "}
                <span className={scss.icon_container}>
                  <Icons
                    name={"maximize"}
                    classIcons={""}
                    width={16}
                    height={16}
                  />
                </span>
                Openness
              </h4>
              <hr className={scss.hr} />
              <p className={scss.desc}>
                to the world, people, new ideas and projects
              </p>
            </div>
            <div className={scss.card}>
              <h4 className={scss.title}>
                {" "}
                <span className={scss.icon_container}>
                  <Icons
                    name={"global"}
                    classIcons={""}
                    width={16}
                    height={16}
                  />
                </span>
                Responsibility
              </h4>
              <hr className={scss.hr} />
              <p className={scss.desc}>
                we are aware that the reults of our work have an impact on our
                lives and the lives of future generations
              </p>
            </div>

            <div className={scss.img_list}>
              <ImgMainValue1 />
            </div>
          </li>
          <li className={scss.list2}>
            <div className={scss.img_list}>
              <ImgMainValue2 />
            </div>

            <div className={scss.card}>
              <h4 className={scss.title}>
                <span className={scss.icon_container}>
                  <Icons name={"cpu"} classIcons={""} width={16} height={16} />
                </span>
                Innovation
              </h4>
              <hr className={scss.hr} />
              <p className={scss.desc}>
                we use the latest technology to implement non-standard solutions
              </p>
            </div>
            <div className={scss.card}>
              <h4 className={scss.title}>
                <span className={scss.icon_container}>
                  <Icons
                    name={"ranking"}
                    classIcons={""}
                    width={16}
                    height={16}
                  />
                </span>
                Quality{" "}
              </h4>
              <hr className={scss.hr} />
              <p className={scss.desc}>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainValue;
