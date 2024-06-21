import clsx from "clsx";
import Container from "../Container";

import cn from "./style.module.scss";

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

function MarketplaceTab() {
  return (
    <Container>
      <div className={clsx(cn["marketplace-tab"])}>
        <div
          className={clsx(
            cn["marketplace-tab__item"],
            cn["marketplace-tab__item--selected"]
          )}
        >
          <H5 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            NFTs
          </H5>
          <span className={clsx(cn["marketplace-tab-num"])}>
            <Base fontFamily={FontFamily.primary} boldness={Boldness.normal}>
              382
            </Base>
          </span>
        </div>
        <div className={clsx(cn["marketplace-tab__item"])}>
          <H5 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            Collections
          </H5>
          <span className={clsx(cn["marketplace-tab-num"])}>
            <Base fontFamily={FontFamily.primary} boldness={Boldness.normal}>
              67
            </Base>
          </span>
        </div>
      </div>
    </Container>
  );
}

export default MarketplaceTab;
