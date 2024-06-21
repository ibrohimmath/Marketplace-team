import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

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
} from "../../../Typography";
import { Button, Type, Size } from "../../../Button";

import LogoSrc from "/public/Logo.png";
import barSrc from "/public/bar.png";
import cn from "./style.module.scss";

function Nav() {
  return (
    <header>
      <nav>
        <div className={clsx(cn["logo"])}>
          <img src={LogoSrc} alt="Marketplace Logo" />
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className={clsx(cn["open"])}>
          <img src={barSrc} alt="Navbar bar opener" />
        </label>
        <label htmlFor="check" className={clsx(cn["shadow"])}></label>
        <label htmlFor="check" className={clsx(cn["close"])}>
          <i className="fa-solid fa-xmark"></i>
        </label>

        <ul className={clsx(cn["nav__list"])}>
          <li className={clsx(cn["nav__item"])}>
            <Link to="/marketplace">
              <Base fontFamily={FontFamily.secondary}>Marketplace</Base>
            </Link>
          </li>
          <li className={clsx(cn["nav__item"])}>
            <Link to="/rankings">
              <Base fontFamily={FontFamily.secondary}>Rankings</Base>
            </Link>
          </li>
          <li className={clsx(cn["nav__item"])}>
            <Link to="/connect-wallet">
              <Base fontFamily={FontFamily.secondary}>Connect a wallet</Base>
            </Link>
          </li>
          <Link to="/create-account">
            <Button
              size={Size.md}
              type={Type.primary}
              icon={
                <i
                  className="fa-regular fa-user"
                  style={{
                    display: "block",
                    backgroundColor: "inherit",
                  }}
                ></i>
              }
              text={"Sign up"}
            />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
