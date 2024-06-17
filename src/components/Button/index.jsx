import clsx from "clsx";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Base,
  Caption,
  FontFamily,
  Boldness,
} from "../Typography";

import cn from "./style.module.scss";

export const Size = {
  default: "btn-size--md",
  sm: "btn-size--sm",
  md: "btn-size--md",
  lg: "btn-size--lg",
};

export const Type = {
  default: "btn-type--primary",
  primary: "btn-type--primary",
  secondary: "btn-type--secondary",
};

// size - 3 ta o'lchamdan bittasini tanlaymiz
// type - primary ni tanlasak binafsharang formatda,
//        secondary ni tanlasak background black va border binafsharang formatda bo'ladi
// icon - button da turishi lozim bo'lgan icon linki
// text - button ichida turishi lozim bo'lgan text
// style - qo'shimcha stillar (margin, text-align, etc)

// Buttonni ishlatish
// import { Button, Size, Type } from "<Button linki>"
// <Button size={Size.default} type={Type.default} icon={<Icon adresi>} text={<Beriladigan tekst>} style={{...}} />
function Button({
  size = Size.default,
  type = Type.default,
  icon,
  text,
  style,
}) {
  return (
    <button className={clsx(cn["btn"], cn[size], cn[type])} style={style}>
      {size === "btn-size--lg" ? (
        <H5>
          <span className={clsx(cn["btn__icon"])}>{icon}</span>
        </H5>
      ) : (
        <Base>
          <span className={clsx(cn["btn__icon"])}>{icon}</span>
        </Base>
      )}
      {size === "btn-size--lg" ? <H5>{text}</H5> : <Base>{text}</Base>}
    </button>
  );
}

export { Button };
