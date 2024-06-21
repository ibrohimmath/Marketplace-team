import clsx from "clsx";

import Container from "../../components/Container";
import Layout from "../../components/Layout";
import MarketplaceShowcase from "../../components/MarketplaceShowcase";
import MarketplaceTab from "../../components/MarketplaceTab";
import { CardNft } from "../../components/Card";

import mushroom from "../../assets/mushroom_background.png";
import asian from "../../assets/asian.png";
import rusty from "../../assets/rusty.png";
import bee from "../../assets/bee.png";
import indian from "../../assets/robot_indian.png";
import fox from "../../assets/fox.png";
import bear from "../../assets/bear.png";
import chinese from "../../assets/dog_chinese.png";
import dotgu from "../../assets/dotgu.png";
import robot from "../../assets/robot_first.png";
import manufacturer from "../../assets/robot_creator.png";
import cherry from "../../assets/cherry.png";
import woman from "../../assets/woman.png";
import travel from "../../assets/travel.png";
import animakid from "../../assets/showcase-avatar.png";
import terminator from "../../assets/terminator.png";
import astronaut from "../../assets/astronaut.png";
import american from "../../assets/american.png";
import happy from "../../assets/happy.png";
import chinese2 from "../../assets/chinese2.png";
import cosmos from "../../assets/cosmosplane.png";

import cn from "./style.module.scss";

const marketplaceDatas = [
  {
    image: mushroom,
    title: "Magic Mushroom 0325",
    avatar: asian,
    avatarName: "Shroomie",
  },
  {
    image: rusty,
    title: "Happy Robot 032",
    avatar: bee,
    avatarName: "BeKind2Robots",
  },
  {
    image: indian,
    title: "Happy Robot 024",
    avatar: bee,
    avatarName: "BeKind2Robots",
  },
  {
    image: bear,
    title: "Designer Bear",
    avatar: fox,
    avatarName: "Mr Fox",
  },
  {
    image: chinese,
    title: "Colorful Dog 0356",
    avatar: dotgu,
    avatarName: "Keepitreal",
  },
  {
    image: robot,
    title: "Dancing Robot 0312",
    avatar: manufacturer,
    avatarName: "Robotica",
  },
  {
    image: cherry,
    title: "Cherry Blossom Girl 035",
    avatar: woman,
    avatarName: "MoonDancer",
  },
  {
    image: travel,
    title: "Space Travel",
    avatar: woman,
    avatarName: "NebulaKid",
  },
  {
    image: cosmos,
    title: "Sunset Dimension",
    avatar: animakid,
    avatarName: "Animakid",
  },
  {
    image: terminator,
    title: "Desert Walk",
    avatar: astronaut,
    avatarName: "Catch 22",
  },
  {
    image: american,
    title: "IceCream Ape 0324",
    avatar: happy,
    avatarName: "Ice Ape Club",
  },
  {
    image: chinese2,
    title: "Colorful Dog 0344",
    avatar: chinese,
    avatarName: "PuppyPower",
  },
];

function Marketplace() {
  return (
    <Layout>
      <MarketplaceShowcase />
      <hr style={{ border: "1px solid #3B3B3B" }} />
      <MarketplaceTab />
      <Container
        style={{ backgroundColor: "#3B3B3B", height: "fit-content !important" }}
      >
        <div className={clsx(cn["marketplace-grid"])}>
          {marketplaceDatas.map((item, ind) => (
            <CardNft
              key={ind}
              mainImage={item.image}
              title={item.title}
              avatar={item.avatar}
              avatarName={item.avatarName}
              bid={"1.63 ETH"}
              price={"0.33 wETH"}
              contentBackground={"#2B2B2B"}
            />
          ))}
        </div>
      </Container>
      <hr style={{ border: "2px solid #2B2B2B" }} />
    </Layout>
  );
}
export default Marketplace;
