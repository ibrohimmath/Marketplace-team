import React from "react";
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
} from "../../Typography";
import { ImgSquare } from "../../Img";

import cn from "../style.module.scss";

export default function WorkItem({ imageSrc, title, description }) {
  return (
    <div className={clsx(cn["work-item"])}>
      <ImgSquare src={imageSrc} />
      <H5 boldness={Boldness.bold} fontFamily={FontFamily.secondary}>
        {title}
      </H5>
      <Base
        boldness={Boldness.normal}
        fontFamily={FontFamily.secondary}
        style={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        {description}
      </Base>
    </div>
  );
}
