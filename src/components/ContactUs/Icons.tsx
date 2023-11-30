import { FC } from "react";
import IconsSprite from "../../icons/sprite.svg";

interface IconsProps {
  name: string;
  classIcons: string;
  width: number;
  height: number;
}
const Icons: FC<IconsProps> = ({ name, classIcons, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      className={`${classIcons}`}
      aria-label={`${name}`}
    >
      <use href={`${IconsSprite}#${name}`}></use>
    </svg>
  );
};

export default Icons;
