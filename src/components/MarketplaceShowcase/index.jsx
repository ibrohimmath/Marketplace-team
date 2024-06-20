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
      <div className={clsx(cn["marketplace-showcase"])}></div>
    </Container>
  );
}

export default MarketplaceShowcase;
