import React, { useState, useEffect } from "react";
import clsx from "clsx";

import Container from "../../../Container";
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
import { Button, Type, Size } from "../../../Button";

import logoSrc from "/public/Logo.png";
import discordSrc from "/public/DiscordLogo.png";
import tubeSrc from "/public/YoutubeLogo.png";
import twitterSrc from "/public/TwitterLogo.png";
import instagramSrc from "/public/InstagramLogo.png";
import cn from "./style.module.scss";

function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={clsx(cn["footer__wrapper"])}>
        <Container>
          <footer>
            <div className={clsx(cn["card"])}>
              <img src={logoSrc} alt="Logo Image" />
              <div className={clsx(cn["created_with"])}>
                NFT Marketplace UI created <br /> with Anima for Figma
              </div>
              <div className={clsx(cn["created_with"])}>Join our community</div>
              <div className={clsx(cn["socials"])}>
                <div className={clsx(cn["social"])}>
                  <img src={discordSrc} alt="Discord Link" />
                </div>
                <div className={clsx(cn["social"])}>
                  <img src={tubeSrc} alt="Youtube Link" />
                </div>
                <div className={clsx(cn["social"])}>
                  <img src={twitterSrc} alt="Twitter Link" />
                </div>
                <div className={clsx(cn["social"])}>
                  <img src={instagramSrc} alt="Instagram Link" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className={clsx(cn["footer__title"])}>Explore</div>
              <a className={clsx(cn["footer__link"])} href="#">
                Marketplace
              </a>
              <a className={clsx(cn["footer__link"])} href="#">
                Rankings
              </a>
              <a className={clsx(cn["footer__link"])} href="#">
                Connect a wallet
              </a>
            </div>
            <div className="card">
              <div className={clsx(cn["footer__title"])}>
                Join Our Weekly Digest
              </div>
              <div className={clsx(cn["created_with"])}>
                Get exclusive promotions & updates <br /> straight to your
                inbox.
              </div>
              <div className={clsx(cn["send_info"])}>
                <input
                  type="email"
                  name="email"
                  className={clsx(cn["email"])}
                  placeholder="Enter your email here"
                />
                <Button
                  size={Size.lg}
                  type={Type.primary}
                  style={{
                    position: +windowWidth > 1124 ? "absolute" : "static",
                    top: 0,
                    right: 0,
                    width: +windowWidth > 1124 ? "fit-content" : "100%",
                    color: "white",
                  }}
                  text="Subscribe"
                />
              </div>
            </div>
          </footer>
          <hr style={{ marginTop: "2rem" }} />
          <Caption
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "1rem" }}
          >
            Ⓒ NFT Market. Use this template freely.
          </Caption>
        </Container>
      </div>
    </>
  );
}

export default Footer;
