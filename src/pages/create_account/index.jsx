import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

import img from "../../assets/Image Placeholder (2).png";
import cn from "./style.module.scss";

function CreateAccount() {
  return (
    <Layout>
      <div className={clsx(cn["create-account"])}>
        <div className={cn.img}>
          <img src={img} alt="" />
        </div>
        <div className={cn.text}>
          <h1>Create account</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Ratione, harum.
          </p>
          <Input />
        </div>
      </div>
    </Layout>
  );
}

export default CreateAccount;
