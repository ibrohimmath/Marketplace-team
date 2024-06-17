import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";

import cn from "./style.module.scss";

function Home() {
  return (
    <Layout>
      <Container>
        <Showcase />
      </Container>
    </Layout>
  );
}

export default Home;
