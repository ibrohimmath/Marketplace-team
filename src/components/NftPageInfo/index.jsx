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
import { ImgSquare } from "../Img";

import happySrc from "../../assets/rusty.png";
import cn from "./style.module.scss";

function NftPageInfo({ style }) {
  return (
    <Container>
      <div className={clsx(cn["nft-page__info"])} style={style}>
        <div className={clsx(cn["page-info-head__grid"])}>
          <div className={clsx(cn["grid_a"])}>
            <H2 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
              The Orbitians
            </H2>
            <H5
              fontFamily={FontFamily.secondary}
              boldness={Boldness.normal}
              style={{ marginTop: "0.5rem", color: "#858584" }}
            >
              Minted on Sep 30, 2022
            </H5>
          </div>
          <div className={clsx(cn["grid_c"])}>
            <H5
              fontFamily={FontFamily.primary}
              boldness={Boldness.normal}
              style={{ marginTop: "1rem", color: "#858584" }}
            >
              Created by
            </H5>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <ImgSquare
                src={happySrc}
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
              <H4
                fontFamily={FontFamily.secondary}
                boldness={Boldness.semibold}
              >
                Orbitian
              </H4>
            </div>
          </div>
          <div className={clsx(cn["grid_b"])}>
            <div className={clsx(cn["timer-block"])}>
              <Caption
                fontFamily={FontFamily.primary}
                boldness={Boldness.semibold}
              >
                Auction ends in:
              </Caption>
              <div className={clsx(cn["flex"])}>
                <div className={clsx(cn["flex-col"])}>
                  <H3 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                    59
                  </H3>
                  <Caption fontFamily={FontFamily.primary}>Hours</Caption>
                </div>
                <div className={clsx(cn["flex-col"])}>
                  <H3 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                    :
                  </H3>
                </div>
                <div className={clsx(cn["flex-col"])}>
                  <H3 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                    59
                  </H3>
                  <Caption fontFamily={FontFamily.primary}>Minutes</Caption>
                </div>
                <div className={clsx(cn["flex-col"])}>
                  <H3 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                    :
                  </H3>
                </div>
                <div className={clsx(cn["flex-col"])}>
                  <H3 fontFamily={FontFamily.primary} boldness={Boldness.bold}>
                    59
                  </H3>
                  <Caption fontFamily={FontFamily.primary}>Seconds</Caption>
                </div>
              </div>
              <Button
                type={Type.primary}
                size={Size.md}
                text="Place bid"
                style={{ margin: "auto", marginTop: "1rem", display: "block" }}
              />
            </div>
          </div>
        </div>
        <div className={clsx(cn["nft-page__desription"])}>
          <H5
            fontFamily={FontFamily.primary}
            boldness={Boldness.normal}
            style={{ marginTop: "2.5rem", color: "#858584" }}
          >
            Description
          </H5>

          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "0.5rem", textAlign: "justify" }}
          >
            The Orbitians <br /> is a collection of 10,000 unique NFTs on the
            Ethereum blockchain,
          </Base>
          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "1.5rem", textAlign: "justify" }}
          >
            There are all sorts of beings in the NFT Universe. The most advanced
            and friendly of the bunch are Orbitians.
          </Base>
          <Base
            fontFamily={FontFamily.secondary}
            boldness={Boldness.normal}
            style={{ marginTop: "1.5rem", textAlign: "justify" }}
          >
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth. These Orbitians are a peaceful race, but
            they have been at war with a group of invaders for many generations.
            The invaders are called Upside-Downs, because of their inverted
            bodies that live on the ground, yet do not know any other way to be.
            Upside-Downs believe that they will be able to win this war if they
            could only get an eye into Orbitian territory, so they've taken to
            make human beings their target.
          </Base>
        </div>
      </div>
    </Container>
  );
}

export default NftPageInfo;
