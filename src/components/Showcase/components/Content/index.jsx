import React from "react";
import { Link, Route } from "react-router-dom";
import clsx from "clsx";
import {
  FontFamily,
  Boldness,
  H1,
  H2,
  H3,
  H4,
  H5,
  Base,
  Caption,
} from "../../../Typography";
// import Button from "../../../Button";
import { Button, Type, Size } from "../../../Button";
import cn from "./style.module.scss";

export default function Content() {
  return (
    <>
      <H1 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
        Discover Digital <br /> Art & Collect NFTs
      </H1>
      <H5
        fontFamily={FontFamily.secondary}
        boldness={Boldness.normal}
        style={{ marginTop: "2rem" }}
      >
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.
      </H5>
      <Link to="/nft">
        <Button
          type={Type.primary}
          size={Size.lg}
          icon={<i className="fa-solid fa-rocket"></i>}
          text={"Get started"}
          style={{ marginTop: "2rem" }}
        />
      </Link>
      <div className={clsx(cn["content__info"])}>
        <div className={clsx(cn["content__info-item"])}>
          <H5
            fontFamily={FontFamily.primary}
            boldness={Boldness.bold}
            style={{ color: "white" }}
          >
            240K+
          </H5>
          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "0.3rem" }}
          >
            Total Sale
          </Base>
        </div>
        <div className={clsx(cn["content__info-item"])}>
          <H5
            fontFamily={FontFamily.primary}
            boldness={Boldness.bold}
            style={{ color: "white" }}
          >
            100K+
          </H5>
          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "0.3rem" }}
          >
            Total Sale
          </Base>
        </div>
        <div className={clsx(cn["content__info-item"])}>
          <H5
            fontFamily={FontFamily.primary}
            boldness={Boldness.bold}
            style={{ color: "white" }}
          >
            240K+
          </H5>
          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "0.3rem" }}
          >
            Total Sale
          </Base>
        </div>
      </div>
    </>
  );
}
