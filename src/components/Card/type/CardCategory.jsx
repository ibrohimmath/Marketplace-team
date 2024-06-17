import React from "react";
import clsx from "clsx";
import { ImgAvatar, ImgFull } from "../../Img";
import ImgBox from "../components/ImgBox";
import Content from "../components/Content";

import cn from "../style.module.scss";

export default function CardCategory({ mainImage, categoryImg, title, style }) {
  return (
    <div className={clsx(cn["card"], cn["card-category"])} style={style}>
      <ImgBox categoryImg={categoryImg}>
        <ImgFull
          src={mainImage}
          style={{
            aspectRatio: "4 / 5",
            filter: "blur(5px)",
          }}
        />
      </ImgBox>
      <Content title={title} style={{ marginTop: "-2rem" }} />
    </div>
  );
}
