import React from "react";
import clsx from "clsx";
import { ImgAvatar, ImgFull } from "../../Img";
import ImgBox from "../components/ImgBox";
import Content from "../components/Content";

import cn from "../style.module.scss";

export default function CardHighlighted({
  mainImage,
  title,
  avatar,
  avatarName,
  style,
}) {
  return (
    <div className={clsx(cn["card"], cn["card-highlighted"])} style={style}>
      <ImgBox>
        <ImgFull src={mainImage} style={{ height: "28rem" }} />
      </ImgBox>
      <Content title={title} avatar={avatar} avatarName={avatarName} />
    </div>
  );
}
