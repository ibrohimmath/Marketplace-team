import React from "react";
import clsx from "clsx";

import cn from "../style.module.scss";

export default function H2({
  children,
  fontFamily,
  boldness,
  style,
  className = "",
}) {
  return (
    <div
      className={clsx(cn["h2"], cn[fontFamily], cn[boldness], className)}
      style={style}
    >
      {children}
    </div>
  );
}
