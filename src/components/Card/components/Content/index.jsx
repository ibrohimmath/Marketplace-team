import React, { useEffect, useState } from "react";
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
} from "../../../Typography";
import { ImgSquare, ImgAvatar } from "../../../Img";

import cn from "./style.module.scss";

export default function Content({
  isSmall,
  isArtist = false,
  firstImage,
  secondImage,
  dataNum,
  title,
  avatar,
  avatarName,
  salesInfo,
  price,
  bid,
  style,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <div
      className={clsx(
        cn["content"],
        dataNum && cn["content-trending"],
        isArtist && !isSmall && "center"
      )}
      style={style}
    >
      {firstImage && secondImage && dataNum && (
        <div className={clsx(cn["grid-triple"])}>
          <ImgSquare src={firstImage} />
          <ImgSquare src={secondImage} />
          <div className={clsx(cn["grid-card"])}>
            <H5 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
              {dataNum}+
            </H5>
          </div>
        </div>
      )}

      {title && (
        <H5
          fontFamily={FontFamily.secondary}
          boldness={Boldness.semibold}
          style={{
            marginTop: `${
              isArtist
                ? "-0.6rem"
                : width > 640
                ? "2.5rem"
                : width <= 540
                ? "5rem"
                : "8rem"
            }`,
          }}
        >
          {title}
        </H5>
      )}

      {avatar && avatarName && (
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <ImgAvatar src={avatar} style={{ height: "1.75rem" }} />
          <Base fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
            {avatarName}
          </Base>
        </div>
      )}

      {salesInfo && (
        <p
          style={{
            marginTop: "0.8rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ color: "#858584" }}
          >
            Total Sales:
          </Base>
          &nbsp;
          <Base
            fontFamily={FontFamily.primary}
            boldness={Boldness.semibold}
            style={{ color: "white" }}
          >
            {salesInfo}
          </Base>
        </p>
      )}

      {price && bid && (
        <>
          <div className={clsx(cn["nft-flex"])}>
            <Caption
              fontFamily={FontFamily.primary}
              style={{ color: "#858584" }}
            >
              Price
            </Caption>
            <Caption
              fontFamily={FontFamily.primary}
              style={{ color: "#858584" }}
            >
              Highest Bid
            </Caption>
          </div>
          <div
            className={clsx(cn["nft-flex"])}
            style={{ marginTop: "0.2rem !important" }}
          >
            <Base boldness={Boldness.normal} fontFamily={FontFamily.primary}>
              {price}
            </Base>
            <Base boldness={Boldness.normal} fontFamily={FontFamily.primary}>
              {bid}
            </Base>
          </div>
        </>
      )}
    </div>
  );
}
