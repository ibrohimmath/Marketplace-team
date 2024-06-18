import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import Trending from "../../components/Trending";
import Creators from "../../components/Creators";
import Category from "../../components/Category";

import cn from "./style.module.scss";

function Home() {
  return (
    <Layout>
      <Container>
        <Showcase />
        <Trending />
        <Creators />
        <Category />
      </Container>
    </Layout>
  );
}

export default Home;
