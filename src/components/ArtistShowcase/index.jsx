import clsx from "clsx";
import Container from "../Container";
import { ImgFull, ImgSquare } from "../Img";

import animakidSrc from "../../assets/showcase-avatar.png";
import buildingSrc from "../../assets/building.png";
import cn from "./style.module.scss";

function ArtistShowcase() {
  return (
    <div
      className={clsx(cn["artist-showcase"])}
      style={{ position: "relative" }}
    >
      <ImgFull src={buildingSrc} style={{ borderRadius: "0" }} />
      <ImgSquare
        src={animakidSrc}
        style={{
          position: "absolute",
          bottom: "0",
          left: "6vw",
          transform: "translateY(50%)",
          width: "6rem",
          height: "6rem",
          zIndex: "2",
          border: "2px solid #2B2B2B",
        }}
      />
    </div>
  );
}

export default ArtistShowcase;
