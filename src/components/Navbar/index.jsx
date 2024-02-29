import { useState } from "react";
import { ActionBtnStyled } from "../../global-styles";
import useMediaQuery from "../../hooks/useMediaQuery";
import logoImg from "../../assets/images/logo.svg";

import {
  HeaderStyled,
  NavUlStyled,
  NavStyled,
  MenuBtnStyled,
} from "./Navbar.styled";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <HeaderStyled>
        <div className="wrapper">
          <img src={logoImg} alt="Easybank" />
          <div className="nav-container">
            {isOpen && <Navigation />}
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
        <img src={logoImg} alt="Easybank" />
        <Navigation />
        <ActionBtnStyled type="button">Request Invite</ActionBtnStyled>
      </div>
    </HeaderStyled>
  );
}

const Navigation = () => {
  return (
    <NavStyled>
      <NavUlStyled>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </NavUlStyled>
    </NavStyled>
  );
};
