import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import img from "../../assets/Image Placeholder (2).png"
import Input from "../../components/Input";

function SignUp(params) {
    return(
        <div>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
            <div className={style.text}>
                <h1>Create account</h1>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ratione, harum.</p>
                <Input />
            </div>
        </div>
    )
}

export default SignUp