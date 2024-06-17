import React from "react";
import clsx from "clsx";
import Content from "./components/Content";
import { ImgAvatar, ImgFull, ImgSquare } from "../Img";
import { CardHighlighted } from "../Card";
import showcaseSrc from "../../assets/showcase.png";
import showcaseAvatar from "../../assets/showcase-avatar.png";
import cn from "./style.module.scss";

export default function Showcase() {
  return (
    <div className={clsx(cn["showcase"])}>
      <div>
        <Content />
      </div>
      <div>
        <CardHighlighted
          mainImage={showcaseSrc}
          title="Space Walking"
          avatar={showcaseAvatar}
          avatarName="Animakid"
        />
      </div>
    </div>
  );
}
