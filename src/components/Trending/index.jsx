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
} from "../Typography";
import CardCollection from "../Card/type/CardCollection";

import dogSrc from "../../assets/dog.png";
import catSrc from "../../assets/cat.png";
import bearSrc from "../../assets/bear.png";
import foxSrc from "../../assets/fox.png";

import mushSrc from "../../assets/mushroom_main.png";
import mushFirstSrc from "../../assets/mushroom_first.png";
import mushSecondSrc from "../../assets/mushroom_second.png";
import asianSrc from "../../assets/asian.png";

import robotSrc from "../../assets/robot_main.png";
import robotFirstSrc from "../../assets/robot_first.png";
import robotSecondSrc from "../../assets/robot_second.png";
import beeSrc from "../../assets/bee.png";

import cn from "./style.module.scss";

export default function Trending() {
  return (
    <div className={clsx(cn["trending"])}>
      <H3 fontFamily={FontFamily.secondary} boldness={Boldness.bold}>
        Trending Collection
      </H3>
      <H5
        fontFamily={FontFamily.secondary}
        boldness={Boldness.normal}
        style={{ marginTop: "1rem" }}
      >
        Checkout our weekly updated trending collection.
      </H5>
      <div className={clsx(cn["grid-trending"])}>
        <CardCollection
          mainImage={dogSrc}
          firstImage={catSrc}
          secondImage={bearSrc}
          dataNum={1025}
          title={"DSGN Animals"}
          avatar={foxSrc}
          avatarName={"MrFox"}
        />
        <CardCollection
          mainImage={mushSrc}
          firstImage={mushFirstSrc}
          secondImage={mushSecondSrc}
          dataNum={1025}
          title={"Magic Mushrooms"}
          avatar={asianSrc}
          avatarName={"Shroomie"}
        />
        <CardCollection
          mainImage={robotSrc}
          firstImage={robotFirstSrc}
          secondImage={robotSecondSrc}
          dataNum={1025}
          title={"Disco Machines"}
          avatar={beeSrc}
          avatarName={"BeKind2Robots"}
        />
      </div>
    </div>
  );
}
