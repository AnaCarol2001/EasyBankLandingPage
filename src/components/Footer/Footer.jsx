import logoImg from "../../assets/images/logo.svg";
import { ActionBtnStyled } from "../../global-styles";

import facebookIcon from "../../assets/icons/icon-facebook.svg";
import youtubeIcon from "../../assets/icons/icon-youtube.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import pinterestIcon from "../../assets/icons/icon-pinterest.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import {
  FooterAttributionContainer,
  FooterContainerStyled,
  FooterNavStyled,
  SocialLinksUlStyled,
} from "./Footer.styled";

export default function Footer() {
  return (
    <footer>
      <FooterContainerStyled>
        <div className="wrapper">
          {/* <object data={logoImg}></object> */}
          <img src={logoImg} alt="Easybank" className="footer__logo" />
          <div className="footer__social">
            <SocialLinks />
          </div>
          <div className="footer__nav">
            <FooterNav />
          </div>
          <div className="footer__action">
            <ActionBtnStyled>Request Invite</ActionBtnStyled>
          </div>
          <div className="footer__copyright">
            <p> &copy; Easybank. All Rights Reserved</p>
          </div>
        </div>
      </FooterContainerStyled>
      <FooterAttributionContainer>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AnaCarol2001">
            AnaCarolina
          </a>
          .
        </p>
      </FooterAttributionContainer>
    </footer>
  );
}

function SocialLinks() {
  return (
    <SocialLinksUlStyled>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Easybank Facebook account" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="Easybank Youtube channel" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Easybank Twitter account" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={pinterestIcon} alt="Easybank Pinterest account" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Easybank Instagram account" />
        </a>
      </li>
    </SocialLinksUlStyled>
  );
}

function FooterNav() {
  return (
    <FooterNavStyled>
      <ul>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Careers
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Support
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </li>
      </ul>
    </FooterNavStyled>
  );
}
