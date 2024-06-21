import clsx from "clsx";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import { ImgFull } from "../../components/Img";
import NftPageInfo from "../../components/NftPageInfo";
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
} from "../../components/Typography";
import { Button, Type, Size } from "../../components/Button";
import { CardNft } from "../../components/Card";

import showcaseSrc from "../../assets/nft_showcase.png";
import rusty from "../../assets/rusty.png";
import fox from "../../assets/fox.png";
import cat from "../../assets/cat.png";
import dog from "../../assets/colourful_dog.png";
import bear from "../../assets/bear.png";
import robotFirst from "../../assets/robot_first.png";
import robotMain from "../../assets/robot_main.png";
import robotSecond from "../../assets/robot_second.png";

import cn from "./style.module.scss";

const images = [
  {
    title: "Foxy Life",
    image: fox,
  },
  {
    title: "Cat From Future",
    image: cat,
  },
  {
    title: "Psycho Dog",
    image: dog,
  },
  {
    title: "Designer Bear",
    image: bear,
  },
  {
    title: "Dancing Robot 075",
    image: robotFirst,
  },
  {
    title: "Dancing Robot 0356",
    image: robotMain,
  },
  {
    title: "Dancing Robot 0321",
    image: robotSecond,
  },
  {
    title: "Dancing Robot 0512",
    image: robotFirst,
  },
  {
    title: "Dancing Robot 0024",
    image: robotMain,
  },
];

function NftPage() {
  return (
    <Layout>
      <ImgFull
        src={showcaseSrc}
        style={{ width: "100%", height: "35rem", borderRadius: "0" }}
      />
      <NftPageInfo />
      <Container>
        <div className={clsx(cn["nft-cards__header"])}>
          <H3 fontFamily={FontFamily.secondary} boldness={Boldness.semibold}>
            More From This Artist
          </H3>
          <Link to="/artist">
            <Button
              type={Type.secondary}
              size={Size.md}
              icon={<i className="fa-solid fa-right-long"></i>}
              text={"Go To Artist Page"}
            />
          </Link>
        </div>
        <div className={clsx(cn["nft-cards__grid"])}>
          {images.map((item, ind) => (
            <CardNft
              key={ind}
              mainImage={item.image}
              title={item.title}
              avatar={rusty}
              avatarName={"Orbitian"}
              price={"1.63 ETH"}
              bid={"0.33 wETH"}
            ></CardNft>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default NftPage;
