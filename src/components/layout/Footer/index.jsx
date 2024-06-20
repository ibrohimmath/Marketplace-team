import React from "react";
import style from "./style.module.scss";
// import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_section}>
          <h2>NFT Marketplace</h2>
          <br />
          <br />
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <br />
          <p>Join our community</p>
          <div className={style.social_icons}>
            <a href="#"><i className="fab fa-gamepad"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className={style.footer_section}>
          <h2>Explore</h2>
          <ul>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Rankings</a></li>
            <li><a href="#">Connect a wallet</a></li>
          </ul>
        </div>
        <div className={style.footer_section}>
          <h2>Join Our Weekly Digest</h2><br />
          <br />
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <br />
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email here" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <p>© NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
}

export default Footer;
