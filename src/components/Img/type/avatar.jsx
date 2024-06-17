import React from "react";
import clsx from "clsx";

import cn from "../style.module.scss";

export default function ImgAvatar({ src, style }) {
  return <img src={src} className={clsx(cn["img-avatar"])} style={style} />;
}
