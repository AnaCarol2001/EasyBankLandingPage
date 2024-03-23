import { useState } from "react";
import useMediaQuery from "src/hooks/useMediaQuery";
import Logo from "src/assets/images/Logo";
import { CallToActionBtnStyled } from "src/components/Buttons/CallToAction";
import { HeaderStyled, MenuBtnStyled } from "./Navbar.styled";
import Navigation from "./Navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <HeaderStyled>
        <div className="wrapper">
          <Logo />
          <div className="nav-container">
            <Navigation isMenuOpen={isOpen} />
            <MenuBtnStyled
              type="button"
              title={isOpen ? "Close" : "Menu"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div className="bar" aria-hidden="true"></div>
              <div className="bar" aria-hidden="true"></div>
              <div className="bar" aria-hidden="true"></div>
            </MenuBtnStyled>
          </div>
        </div>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled>
      <div className="wrapper">
        <Logo />
        <Navigation isMenuOpen={true} />
        <CallToActionBtnStyled type="button">
          Request Invite
        </CallToActionBtnStyled>
      </div>
    </HeaderStyled>
  );
}
