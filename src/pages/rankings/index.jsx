import React from "react";
import clsx from "clsx";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import CreatorCard from "../../components/CreatorCard/CreatorCard";

import profileImg from "../../assets/Image Placeholder (2).png";
import cn from "./style.module.scss";

function Rankings() {
  return (
    <Layout>
      <Container>
        <div className={clsx(cn["rankings"])}>
          <CreatorCard
            profileImg={profileImg}
            name="Jaydon Ekstrom Bothman"
            percentageChange={1.41}
            sales={602}
            earnings={12.4}
          />
        </div>
      </Container>
    </Layout>
  );
}

export default Rankings;
