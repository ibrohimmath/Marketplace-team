import React from "react";
import clsx from "clsx";

import cn from "../style.module.scss";

export default function Base({
  children,
  fontFamily,
  boldness,
  style,
  className = "",
}) {
  return (
    <span
      className={clsx(cn["base"], cn[fontFamily], cn[boldness], className)}
      style={style}
    >
      {children}
    </span>
  );
}
