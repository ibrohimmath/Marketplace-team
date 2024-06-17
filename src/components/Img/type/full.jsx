import React from "react";
import clsx from "clsx";

import cn from "../style.module.scss";

export default function ImgFull({ src, style }) {
  return <img src={src} className={clsx(cn["img-full"])} style={style} />;
}
