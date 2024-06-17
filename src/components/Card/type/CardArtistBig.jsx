import React from "react";
import clsx from "clsx";

import { ImgAvatar } from "../../Img";
import ImgBox from "../components/ImgBox";
import Content from "../components/Content";

import cn from "../style.module.scss";

export default function CardArtistBig({
  order,
  creatorImage,
  title,
  salesInfo,
  style,
}) {
  return (
    <div className={clsx(cn["card"], cn["card-artist-big"])} style={style}>
      <ImgBox
        style={{
          backgroundColor: "#3b3b3b",
          display: "flex",
          justifyContent: "center",
          padding: "1.2rem",
        }}
      >
        <div className={clsx(cn["img-order"])}>{order}</div>
        <ImgAvatar src={creatorImage} style={{ height: "10rem" }} />
      </ImgBox>
      <Content isArtist={true} title={title} salesInfo={salesInfo} />
    </div>
  );
}
