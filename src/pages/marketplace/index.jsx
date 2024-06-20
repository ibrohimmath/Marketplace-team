import Container from "../../components/Container";
import Layout from "../../components/Layout";
import MarketplaceShowcase from "../../components/MarketplaceShowcase";

import cn from "./style.module.scss";

function Marketplace() {
  return (
    <Layout>
      <MarketplaceShowcase />
    </Layout>
  );
}

export default Marketplace;
