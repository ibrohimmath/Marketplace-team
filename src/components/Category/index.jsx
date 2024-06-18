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
} from "../Typography";
import CardCategory from "../Card/type/CardCategory";

import kitSrc from "../../assets/kit.png";
import paintsrc from "../../assets/paint.png";
import monkeySrc from "../../assets/monkey.png";
import swatchSrc from "../../assets/Swatches.png";
import musicSrc from "../../assets/music.png";
import musicLogoSrc from "../../assets/MusicNotes.png";
import oldmanSrc from "../../assets/oldman.png";
import cameraSrc from "../../assets/Camera.png";
import cosmosSrc from "../../assets/cosmos.png";
import videoSrc from "../../assets/VideoCamera.png";
import keySrc from "../../assets/key.png";
import magicSrc from "../../assets/MagicWand.png";
import streetSrc from "../../assets/street.png";
import basketballSrc from "../../assets/basketball.png";
import futureSrc from "../../assets/future.png";
import planetSrc from "../../assets/Planet.png";

const datas = [
  { image: kitSrc, logo: paintsrc, title: "Art" },
  { image: monkeySrc, logo: swatchSrc, title: "Collectibles" },
  { image: musicSrc, logo: musicLogoSrc, title: "Mjsic" },
  { image: oldmanSrc, logo: cameraSrc, title: "Photography" },
  { image: cosmosSrc, logo: videoSrc, title: "Video" },
  { image: keySrc, logo: magicSrc, title: "Utility" },
  { image: streetSrc, logo: basketballSrc, title: "Sport" },
  { image: futureSrc, logo: planetSrc, title: "Virtual Worlds" },
];

import cn from "./style.module.scss";

export default function Category() {
  return (
    <div className={clsx(cn["category"])}>
      <H3 fontFamily={FontFamily.secondary} boldness={Boldness.bold}>
        Browse Categories
      </H3>
      <div className={clsx(cn["grid-categories"])}>
        {datas.map((item, ind) => (
          <CardCategory
            key={ind}
            title={item.title}
            mainImage={item.image}
            categoryImg={item.logo}
          />
        ))}
      </div>
    </div>
  );
}
