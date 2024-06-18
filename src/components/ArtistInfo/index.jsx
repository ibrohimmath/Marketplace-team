import clsx from "clsx";
import Container from "../Container";
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

import globeSrc from "../../../public/Globe.png";
import discordSrc from "../../../public/DiscordLogo.png";
import youtubeSrc from "../../../public/YoutubeLogo.png";
import twitterSrc from "../../../public/TwitterLogo.png";
import instagramSrc from "../../../public/InstagramLogo.png";
import cn from "./style.module.scss";

function ArtistInfo() {
  return (
    <div className={clsx(cn["artist-info"])}>
      <Container>
        <div className={clsx(cn["artist-info-flex"])}>
          <H2
            fontFamily={FontFamily.secondary}
            boldness={Boldness.semibold}
            style={{ marginTop: "0.5rem" }}
          >
            Animakid
          </H2>
          <div className={clsx(cn["btn-flex"])}>
            <Button
              type={Type.primary}
              size={Size.md}
              icon={<i className="fa-regular fa-clone"></i>}
              text="0xc0E3...B79C"
            />
            <Button
              type={Type.secondary}
              size={Size.md}
              icon={"+"}
              text={"Follow"}
            />
          </div>
        </div>
        <div className={clsx(cn["text-flex"])}>
          <div className={clsx(cn["text-flex__col"])}>
            <div className={clsx(cn["col-num"])}>
              <H4 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                250k+
              </H4>
            </div>
            <div className={clsx(cn["col-info"])}>
              <H5 fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
                Volume
              </H5>
            </div>
          </div>
          <div className={clsx(cn["text-flex__col"])}>
            <div className={clsx(cn["col-num"])}>
              <H4 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                50+
              </H4>
            </div>
            <div className={clsx(cn["col-info"])}>
              <H5 fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
                NFTs Sold
              </H5>
            </div>
          </div>
          <div className={clsx(cn["text-flex__col"])}>
            <div className={clsx(cn["col-num"])}>
              <H4 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                3000+
              </H4>
            </div>
            <div className={clsx(cn["col-info"])}>
              <H5 fontFamily={FontFamily.secondary} boldness={Boldness.normal}>
                Followers
              </H5>
            </div>
          </div>
        </div>
        <H5
          fontFamily={FontFamily.primary}
          boldness={Boldness.bold}
          style={{ marginTop: "2.5rem" }}
          className={clsx(cn["gray"])}
        >
          Bio
        </H5>
        <H5
          fontFamily={FontFamily.secondary}
          boldness={Boldness.normal}
          style={{ marginTop: "0.8rem" }}
        >
          The Internet's Friendliest Designer Kid.
        </H5>
        <H5
          fontFamily={FontFamily.primary}
          boldness={Boldness.bold}
          style={{ marginTop: "2rem" }}
          className={clsx(cn["gray"])}
        >
          Links
        </H5>
        <H5 style={{ marginTop: "0.8rem", display: "flex", gap: "1rem" }}>
          <span>
            <i className={clsx("fa-solid", "fa-globe", cn["gray"])}></i>
          </span>
          <span>
            <i className={clsx("fa-brands", "fa-discord", cn["gray"])}></i>
          </span>
          <span>
            <i className={clsx("fa-brands", "fa-youtube", cn["gray"])}></i>
          </span>
          <span>
            <i className={clsx("fa-brands", "fa-twitter", cn["gray"])}></i>
          </span>
          <span>
            <i className={clsx("fa-brands", "fa-instagram", cn["gray"])}></i>
          </span>
        </H5>
      </Container>
    </div>
  );
}

export default ArtistInfo;
