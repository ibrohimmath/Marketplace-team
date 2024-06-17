import React from "react";
import clsx from "clsx";

import { ImgSquare } from "../../Img";
import ImgBox from "../components/ImgBox";
import Content from "../components/Content";

import cn from "../style.module.scss";

export default function CardCollection({
  mainImage,
  firstImage,
  secondImage,
  dataNum,
  title,
  avatar,
  avatarName,
  style,
}) {
  return (
    <div className={clsx(cn["card"], cn["card-collection"])} style={style}>
      <ImgBox>
        <ImgSquare src={mainImage} style={{ height: "28rem" }} />
      </ImgBox>
      <Content
        firstImage={firstImage}
        secondImage={secondImage}
        dataNum={dataNum}
        title={title}
        avatar={avatar}
        avatarName={avatarName}
        style={style}
      />
    </div>
  );
}
