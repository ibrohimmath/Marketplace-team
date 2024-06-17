import React from "react";
import clsx from "clsx";
import { ImgAvatar, ImgFull } from "../../Img";
import ImgBox from "../components/ImgBox";
import Content from "../components/Content";

import cn from "../style.module.scss";

export default function CardNft({
  mainImage,
  title,
  avatar,
  avatarName,
  price,
  bid,
  style,
}) {
  return (
    <div className={clsx(cn["card"], cn["card-highlighted"])} style={style}>
      <ImgBox>
        <ImgFull src={mainImage} style={{ aspectRatio: "4 / 5" }} />
      </ImgBox>
      <Content
        title={title}
        avatar={avatar}
        avatarName={avatarName}
        price={price}
        bid={bid}
        style={{ marginTop: "-2rem" }}
      />
    </div>
  );
}
