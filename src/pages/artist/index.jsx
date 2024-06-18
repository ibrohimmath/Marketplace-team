import Container from "../../components/Container";
import Layout from "../../components/Layout";
import ArtistShowcase from "../../components/ArtistShowcase";
import ArtistInfo from "../../components/ArtistInfo";
import ArtistTab from "../../components/ArtistTab";

import cn from "./style.module.scss";

function Artist() {
  return (
    <Layout>
      <ArtistShowcase />
      <ArtistInfo />
      <hr style={{ border: "1px solid #3B3B3B" }} />
      <ArtistTab />
    </Layout>
  );
}

export default Artist;
