import React from "react";
import clsx from "clsx";

import cn from "../../style.module.scss";

export default function ImgBox({ categoryImg, children, style }) {
  return (
    <div className={clsx(cn["image-box"])} style={style}>
      {categoryImg && (
        <div className={clsx(cn["category-img"])}>
          <img src={categoryImg} />
        </div>
      )}
      {children}
    </div>
  );
}
