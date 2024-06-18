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

import cn from "./style.module.scss";

function ArtistTab() {
  return (
    <Container>
      <div className={clsx(cn["artist-tab"])}>
        <div
          className={clsx(
            cn["artist-tab__item"],
            cn["artist-tab__item--selected"]
          )}
        >
          <H5 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            Created
          </H5>
          <span className={clsx(cn["artist-tab-num"])}>
            <Base fontFamily={FontFamily.primary} boldness={Boldness.normal}>
              382
            </Base>
          </span>
        </div>
        <div className={clsx(cn["artist-tab__item"])}>
          <H5 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            Owned
          </H5>
          <span className={clsx(cn["artist-tab-num"])}>
            <Base fontFamily={FontFamily.primary} boldness={Boldness.normal}>
              67
            </Base>
          </span>
        </div>
        <div className={clsx(cn["artist-tab__item"])}>
          <H5 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            Collection
          </H5>
          <span className={clsx(cn["artist-tab-num"])}>
            <Base fontFamily={FontFamily.primary} boldness={Boldness.normal}>
              4
            </Base>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default ArtistTab;
