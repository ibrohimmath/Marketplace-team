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

function MarketplaceShowcase() {
  return (
    <Container>
      <div className={clsx(cn["marketplace-showcase"])}>
        <H2 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
          Browse Marketplace
        </H2>
        <Base
          boldness={Boldness.normal}
          fontFamily={FontFamily.secondary}
          style={{ marginTop: "0.6rem" }}
        >
          Browse through more than 50k NFTs on the NFT Marketplace.
        </Base>
        <div className={clsx(cn["marketplace-showcase__input-wrapper"])}>
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className={clsx(cn["marketplace-showcase__input"])}
          />
          <div className={clsx(cn["search-icon"])}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MarketplaceShowcase;
