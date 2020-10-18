import React from "react";
import "./FooterLayout.css";
import { Link } from "react-router-dom";

//#region ICONS
import FacebookIcon from "../assets/images/social-icons/facebook-white.svg";
import InstagramIcon from "../assets/images/social-icons/instagram-white.svg";
import TwitterIcon from "../assets/images/social-icons/twitter-white.svg";
import AppStoreIcon from "../assets/images/store/app-store.svg";
import PlayStoreIcon from "../assets/images/store/play-store.svg";
import WindowsStoreIcon from "../assets/images/store/windows-store.svg";
//#endregion ICONS

const styles = {
  facebookIconMaxWidth: {
    maxWidth: 9,
  },
};

export function FooterLayout() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          made<span>with</span>love
        </h3>

        <p className="footer-links">
          <Link to="/home" className="link-1">
            Home
          </Link>

          <Link to="/movies">Movies</Link>

          <Link to="/series">Series</Link>
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="">
              <img
                alt="facebook"
                src={FacebookIcon}
                style={styles.facebookIconMaxWidth}
              ></img>
            </i>
          </a>
          <a href="#">
            <i>
              <img alt="instagram" src={InstagramIcon}></img>
            </i>
          </a>
          <a href="#">
            <i>
              <img alt="twitter" src={TwitterIcon}></img>
            </i>
          </a>
        </div>
      </div>

      <div className="footer-center"></div>

      <div className="footer-right">
        <div className="store-icons">
          <a href="#">
            <img alt="appstore" src={AppStoreIcon}></img>
          </a>
          <a href="#">
            <img alt="playstore" src={PlayStoreIcon}></img>
          </a>
          <a href="#">
            <img alt="windowsstore" src={WindowsStoreIcon}></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
