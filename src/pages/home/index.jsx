import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import Trending from "../../components/Trending";
import Creators from "../../components/Creators";
import Category from "../../components/Category";
import Nft from "../../components/Nft";
import Mushroom from "../../components/Mushroom";
import Works from "../../components/Works";
import Digest from "../../components/Digest";

import cn from "./style.module.scss";

function Home() {
  return (
    <Layout>
      <Container>
        <Showcase />
        <Trending />
        <Creators />
        <Category />
        <Nft />
      </Container>
      <Mushroom />
      <Container>
        <Works />
        <Digest />
      </Container>
    </Layout>
  );
}

export default Home;
