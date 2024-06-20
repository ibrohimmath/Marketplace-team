import clsx from "clsx";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import ArtistShowcase from "../../components/ArtistShowcase";
import ArtistInfo from "../../components/ArtistInfo";
import ArtistTab from "../../components/ArtistTab";
import { CardNft } from "../../components/Card";

import animakidSrc from "../../assets/showcase-avatar.png";
import cosmosSrc from "../../assets/cosmos.png";
import planeSrc from "../../assets/cosmosplane.png";
import astronautSrc from "../../assets/astronaut.png";
import cryptoSrc from "../../assets/crypto_city.png";
import colourfulSrc from "../../assets/colourful_dog.png";
import talesSrc from "../../assets/tales.png";
import cherrySrc from "../../assets/cherry.png";
import rugbySrc from "../../assets/rugby.png";
import happySrc from "../../assets/happy.png";

import cn from "./style.module.scss";

const datas = [
  {
    image: planeSrc,
    title: "Distant Galaxy",
  },
  {
    image: cosmosSrc,
    title: "Life on Edena",
  },
  {
    image: astronautSrc,
    title: "AstroFiction",
  },
  {
    image: cryptoSrc,
    title: "CryptoCity",
  },
  {
    image: colourfulSrc,
    title: "ColourfulDog 0524",
  },
  {
    image: talesSrc,
    title: "Space tales",
  },
  {
    image: cherrySrc,
    title: "Cherry Blossom Girl 037",
  },
  {
    image: rugbySrc,
    title: "Dancing Robots 0987",
  },
  {
    image: happySrc,
    title: "IceCream Ape",
  },
];

function Artist() {
  return (
    <Layout>
      <ArtistShowcase />
      <ArtistInfo />
      <hr style={{ border: "1px solid #3B3B3B" }} />
      <ArtistTab />
      <Container style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className={clsx(cn["artist-grid"])}>
          {datas.map((item, ind) => (
            <CardNft
              key={ind}
              mainImage={item.image}
              title={item.title}
              avatar={animakidSrc}
              avatarName={"Animakid"}
              price="1.63 ETH"
              bid="0.33 wETH"
            />
          ))}
        </div>
      </Container>
      <hr
        style={{
          marginTop: "1rem !important",
          width: "100%",
          border: "1px solid black",
        }}
      />
    </Layout>
  );
}

export default Artist;
