import Logo from "src/assets/images/Logo";
import { CallToActionBtnStyled } from "src/components/Buttons/CallToAction";
import SocialLinks from "./SocialLinks";
import FooterNav from "./FooterNav";
import {
  FooterAttributionContainer,
  FooterContainerStyled,
} from "./Footer.styled";
export default function Footer() {
  return (
    <footer>
      <FooterContainerStyled>
        <div className="wrapper">
          <div className="footer__logo">
            <Logo textFill={"#fff"} />
          </div>
          <div className="footer__social">
            <SocialLinks />
          </div>
          <div className="footer__nav">
            <FooterNav />
          </div>
          <div className="footer__action">
            <CallToActionBtnStyled>Request Invite</CallToActionBtnStyled>
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
