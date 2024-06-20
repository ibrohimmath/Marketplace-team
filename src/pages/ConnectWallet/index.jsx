import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import img from "../../assets/Image Placeholder (2).png"
import img1 from "../../assets/metamask.png"
import img2 from "../../assets/WalletConnect.png"
import img3 from "../../assets/Coinbase.png"
import Input from "../../components/Input";

function ConnectWallet(params) {
    return(
        <div>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
            <div className={style.text}>
                <h1>Create account</h1>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ratione, harum.</p>
                <button><img src={img1} alt="" />Metamask</button>
                <button><img src={img2} alt="" />Wallet Connect</button>
                <button><img src={img3} alt="" />Coinbase</button>
            </div>
        </div>
    )
}

export default ConnectWallet