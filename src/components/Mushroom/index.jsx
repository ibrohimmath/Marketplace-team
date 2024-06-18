import React from "react";
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
import { ImgAvatar } from "../Img";
import { Button, Type, Size } from "../Button";

import asianSrc from "../../assets/asian.png";
import cn from "./style.module.scss";

export default function Mushroom() {
  return (
    <Container className={"mushroom"}>
      <div className={clsx(cn["user"])}>
        <ImgAvatar src={asianSrc} style={{ width: "1.5rem" }}></ImgAvatar>
        <Base fontFamily={FontFamily.secondary}>Shroomie</Base>
      </div>
      <div className={clsx(cn["mushroom-flex"])}>
        <div className={clsx(cn["col"])}>
          <H2 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            Magic Mushrooms
          </H2>

          <Button
            size={Size.lg}
            type={Type.tertiary}
            icon={
              <i className={clsx("fa-regular", "fa-eye", cn["btn__eye"])}></i>
            }
            text="See Nft"
            style={{ backgroundColor: "red !important", color: "black" }}
          ></Button>
        </div>
        <div className={clsx(cn["timer-block"])}>
          <Caption fontFamily={FontFamily.primary} boldness={Boldness.semibold}>
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
        </div>
      </div>
    </Container>
  );
}
