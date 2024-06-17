import React from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

function Container({ children, style, className }) {
  return (
    <>
      <div
        className={clsx(cn["container"], className && cn[className])}
        style={style ? style : {}}
      >
        {children}
      </div>
    </>
  );
}

export default Container;
