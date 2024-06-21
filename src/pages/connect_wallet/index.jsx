import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Input from "../../components/Input";

import img from "../../assets/Image Placeholder (2).png";
import img1 from "../../assets/metamask.png";
import img2 from "../../assets/WalletConnect.png";
import img3 from "../../assets/Coinbase.png";
import cn from "./style.module.scss";

function ConnectWallet() {
  return (
    <Layout>
      <div className={clsx(cn["connect-wallet"])}>
        <div className={cn.img}>
          <img src={img} alt="" />
        </div>
        <div className={cn.text}>
          <h1>Create account</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione, harum.
          </p>
          <button>
            <img src={img1} alt="" />
            Metamask
          </button>
          <button>
            <img src={img2} alt="" />
            Wallet Connect
          </button>
          <button>
            <img src={img3} alt="" />
            Coinbase
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ConnectWallet;
