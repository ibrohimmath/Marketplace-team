import React from "react";
import clsx from "clsx";

import { ImgAvatar } from "../../Img";
import ImgBox from "../components/ImgBox";
import Content from "../components/Content";

import cn from "../style.module.scss";

export default function CardArtistSmall({
  order,
  creatorImage,
  title,
  salesInfo,
  style,
}) {
  return (
    <div className={clsx(cn["card"], cn["card-artist-small"])} style={style}>
      <ImgBox
        style={{
          backgroundColor: "#3b3b3b",
          display: "flex",
          justifyContent: "center",
          padding: "1.2rem",
          borderRadius: "20px 0 0 20px",
        }}
      >
        <div className={clsx(cn["img-order"])}>{order}</div>
        <ImgAvatar src={creatorImage} style={{ height: "5rem" }} />
      </ImgBox>
      <Content
        isSmall={true}
        isArtist={true}
        title={title}
        salesInfo={salesInfo}
        style={{
          height: "7.4rem",
          borderRadius: "0 20px 20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem !important",
        }}
      />
    </div>
  );
}
