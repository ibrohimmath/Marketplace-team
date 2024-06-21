import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

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
} from "../Typography";
import { Button, Type, Size } from "../Button";
import { CardArtistBig, CardArtistSmall } from "../Card";

import womanSrc from "../../assets/woman.png";
import doctorSrc from "../../assets/doctor.png";
import samuraiSrc from "../../assets/samurai.png";
import jidaiSrc from "../../assets/jidai.png";
import whaleSrc from "../../assets/whale.png";
import foxSrc from "../../assets/fox.png";
import asianSrc from "../../assets/asian.png";
import robotSrc from "../../assets/robot_creator.png";
import rustySrc from "../../assets/rusty.png";
import animakidSrc from "../../assets/showcase-avatar.png";
import dotguSrc from "../../assets/dotgu.png";
import japaneseSrc from "../../assets/japanese.png";

const datas = [
  { image: womanSrc, title: "Keepitreal" },
  { image: doctorSrc, title: "DigiLab" },
  { image: samuraiSrc, title: "GravityOne" },
  { image: jidaiSrc, title: "Juanie" },
  { image: whaleSrc, title: "BlueWhale" },
  { image: foxSrc, title: "Mr Fox" },
  { image: asianSrc, title: "Shroomie" },
  { image: robotSrc, title: "Robotica" },
  { image: rustySrc, title: "RustyRobot" },
  { image: animakidSrc, title: "Animakid" },
  { image: dotguSrc, title: "Dotgu" },
  { image: japaneseSrc, title: "Ghiblier" },
];

import cn from "./style.module.scss";

export default function Creators() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className={clsx(cn["creators"])}>
      <H3 fontFamily={FontFamily.secondary} boldness={Boldness.bold}>
        Top creators
      </H3>
      <div className={clsx(cn["flex"])}>
        <H5 fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
          Checkout Top Rated Creators on the NFT Marketplace
        </H5>
        <Link to="/rankings">
          <Button
            type={Type.secondary}
            size={Size.lg}
            icon={<i className={clsx("fa-solid", "fa-rocket")}></i>}
            text="View Rankings"
          />
        </Link>
      </div>

      {/* <div className={clsx(cn["grid-creators"])}>
        {datas.map((item, id) =>
          width >= 840 ? (
            <CardArtistBig
              key={id}
              order={id + 1}
              creatorImage={item.image}
              title={item.title}
              salesInfo={"34.53 ETH"}
            />
          ) : (
            <CardArtistSmall
              key={id}
              order={id + 1}
              creatorImage={item.image}
              title={item.title}
              salesInfo={"34.53 ETH"}
            />
          )
        )}
      </div> */}

      <div className={clsx(cn["grid-creators"])}>
        {datas.map((item, id) =>
          width >= 840 ? (
            <CardArtistBig
              key={id}
              order={id + 1}
              creatorImage={item.image}
              title={item.title}
              salesInfo={"34.53 ETH"}
            />
          ) : (
            <CardArtistSmall
              key={id}
              order={id + 1}
              creatorImage={item.image}
              title={item.title}
              salesInfo={"34.53 ETH"}
            />
          )
        )}
      </div>
    </div>
  );
}
