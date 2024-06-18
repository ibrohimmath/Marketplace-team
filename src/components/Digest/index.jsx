import React from "react";
import clsx from "clsx";

import { ImgSquare } from "../Img";
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

import astronautmanSrc from "../../assets/astronaut_man.png";
import cn from "./style.module.scss";

export default function Digest() {
  return (
    <div className={clsx(cn["digest"])}>
      <div className={clsx(cn["digest-card"])}>
        <ImgSquare src={astronautmanSrc} style={{ height: "45vh" }} />
        <div className={clsx(cn["content"])}>
          <H3 boldness={Boldness.bold} fontFamily={FontFamily.secondary}>
            Join our weekly digest
          </H3>
          <H5
            boldness={Boldness.normal}
            fontFamily={FontFamily.secondary}
            style={{ marginTop: "0.7rem" }}
          >
            Get exclusive promotions & updates straight to your inbox.
          </H5>
          <div className={clsx(cn["input-wrapper"])}>
            <input type="text" placeholder="Enter your email here" />
            {/* <Button type="primary">
              <i className="fa-solid fa-rocket"></i> Subscribe
            </Button> */}
            <Button
              type={Type.primary}
              size={Size.lg}
              icon={<i className="fa-solid fa-rocket"></i>}
              text={"Subscribe"}
              className={cn["digest__btn"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
