import clsx from "clsx";
import Layout from "../../components/Layout";
import { ImgFull } from "../../components/Img";
import NftPageInfo from "../../components/NftPageInfo";

import showcaseSrc from "../../assets/nft_showcase.png";
import cn from "./style.module.scss";

function NftPage() {
  return (
    <Layout>
      <ImgFull
        src={showcaseSrc}
        style={{ width: "100%", height: "35rem", borderRadius: "0" }}
      />
      <NftPageInfo />
    </Layout>
  );
}

export default NftPage;
