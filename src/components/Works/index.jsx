import React from "react";
import clsx from "clsx";

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
import WorkItem from "./components/work";

import walletSrc from "../../assets/wallet.png";
import collectionSrc from "../../assets/collection.png";
import earnSrc from "../../assets/earning.png";

import cn from "./style.module.scss";

export default function Works() {
  return (
    <div className={clsx(cn["works"])}>
      <H3 fontFamily={FontFamily.secondary} boldness={Boldness.bold}>
        How It Works
      </H3>
      <H5
        fontFamily={FontFamily.secondary}
        boldness={Boldness.normal}
        style={{ marginTop: "1rem" }}
      >
        Find Out How To Get Started
      </H5>
      <div className={clsx(cn["works-grid"])}>
        <WorkItem
          imageSrc={walletSrc}
          title={"Setup Your wallet"}
          description={
            "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
          }
        />
        <WorkItem
          imageSrc={collectionSrc}
          title={"Create Collection"}
          description={
            "Upload your work and setup your collection. Add a description, social links and floor price."
          }
        />
        <WorkItem
          imageSrc={earnSrc}
          title={"Start Earning"}
          description={
            "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
          }
        />
      </div>
    </div>
  );
}
